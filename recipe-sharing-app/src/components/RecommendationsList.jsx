// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\RecommendationsList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // To allow favoriting directly from recommendations

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2 style={{ color: '#28a745' }}>Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get recommendations!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recommendations.map(recipe => (
            <li key={recipe.id} style={{
              border: '1px solid #d4edda', // Light green border
              padding: '15px',
              margin: '10px 0',
              borderRadius: '8px',
              backgroundColor: '#e6ffed', // Light green background
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#28a745', flexGrow: 1 }}>
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

export default RecommendationsList;