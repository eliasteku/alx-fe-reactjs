// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to home page after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '8px 15px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;