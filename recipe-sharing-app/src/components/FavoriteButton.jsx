// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\FavoriteButton.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5em',
        color: isFavorited ? 'gold' : 'lightgray', // Gold when favorited
        marginLeft: '10px',
        padding: '0',
        verticalAlign: 'middle'
      }}
      title={isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      {isFavorited ? '★' : '☆'} {/* Star icon */}
    </button>
  );
};

export default FavoriteButton;