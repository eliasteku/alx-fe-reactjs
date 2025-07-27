// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\RecipeDetails.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton'; // Import FavoriteButton

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h1 style={{ color: '#333' }}>
        {recipe.title}
        <FavoriteButton recipeId={recipe.id} /> {/* Add FavoriteButton next to title */}
      </h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555' }}>{recipe.description}</p>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Link to={`/edit-recipe/${recipe.id}`} style={{
          padding: '8px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '8px 15px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;