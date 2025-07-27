// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (idToDelete) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== idToDelete)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }) // Used for initial loading or setting entire list
}));

export { useRecipeStore };