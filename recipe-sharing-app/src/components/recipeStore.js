// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  // New state for favorites and recommendations
  favorites: [], // Stores recipe IDs of favorited recipes
  recommendations: [],

  // Core Recipe Actions (existing)
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations after adding
  },
  deleteRecipe: (idToDelete) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== idToDelete),
      favorites: state.favorites.filter(id => id !== idToDelete) // Also remove from favorites if recipe is deleted
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations after deleting
  },
  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations after updating
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations(); // Generate initial recommendations
  },

  // Search & Filter Actions (existing)
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.description.toLowerCase().includes(lowerCaseSearchTerm)
      )
    });
  },

  // New Favorites Actions
  addFavorite: (recipeId) => {
    set(state => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return {}; // Do nothing if already favorited
    });
    get().generateRecommendations(); // Re-generate recommendations after favoriting
  },
  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    get().generateRecommendations(); // Re-generate recommendations after unfavoriting
  },

  // New Recommendations Action
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Simple mock: Recommend other recipes that are not favorites,
    // but have similar characteristics (e.g., in a real app, tags or ingredients).
    // For this example, let's just pick some random recipes that aren't already favorites.
    const nonFavoriteRecipes = recipes.filter(
      recipe => !favorites.includes(recipe.id)
    );

    // Shuffle and pick a few (e.g., 3) random non-favorite recipes
    const shuffled = nonFavoriteRecipes.sort(() => 0.5 - Math.random());
    const recommended = shuffled.slice(0, 3); // Limit to 3 recommendations

    set({ recommendations: recommended });
  },
}));

export { useRecipeStore };