// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({ // Use 'get' to access current state within actions
  recipes: [],
  // New state for search and filter
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes(); // Re-filter after adding a recipe
  },
  deleteRecipe: (idToDelete) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== idToDelete)
    }));
    get().filterRecipes(); // Re-filter after deleting a recipe
  },
  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    get().filterRecipes(); // Re-filter after updating a recipe
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Filter immediately after setting initial recipes
  },
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filter whenever search term changes
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get(); // Get current recipes and searchTerm
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.description.toLowerCase().includes(lowerCaseSearchTerm) // Also search by description
      )
    });
  },
}));

export { useRecipeStore };