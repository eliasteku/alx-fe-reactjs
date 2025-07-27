// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;