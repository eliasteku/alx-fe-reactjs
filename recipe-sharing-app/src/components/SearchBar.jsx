// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get current search term to display in input

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      value={searchTerm} // Controlled component
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        margin: '20px 0',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box' // Include padding in width
      }}
    />
  );
};

export default SearchBar;