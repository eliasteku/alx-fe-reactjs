// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // To allow unfavoriting from this list

const FavoritesList = () => {
  // Map favorite IDs back to full recipe objects
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id)).filter(Boolean) // .filter(Boolean) removes undefined if a recipe isn't found
  );

  return (
    <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2 style={{ color: '#007bff' }}>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorite recipes yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favorites.map(recipe => (
            <li key={recipe.id} style={{
              border: '1px solid #ddd',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '8px',
              backgroundColor: '#fffbe6', // Light yellow background for favorites
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff', flexGrow: 1 }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{recipe.title}</h3>
                <p style={{ margin: '0', color: '#555' }}>{recipe.description}</p>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;