// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link for navigation to details

const RecipeList = () => {
  // Use filteredRecipes instead of recipes
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching your search.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id} style={{
              border: '1px solid #ddd',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{recipe.title}</h3>
              </Link>
              <p style={{ margin: '0', color: '#555' }}>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;