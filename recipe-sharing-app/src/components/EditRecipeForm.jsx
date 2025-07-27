// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\components\EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate();
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const recipes = useRecipeStore(state => state.recipes); // Get all recipes to find the one to edit

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recipeFound, setRecipeFound] = useState(false);

  useEffect(() => {
    const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(id));
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setDescription(recipeToEdit.description);
      setRecipeFound(true);
    } else {
      setRecipeFound(false);
      // Optionally redirect if recipe not found
      // navigate('/');
    }
  }, [id, recipes]); // Re-run effect if ID or recipes change

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    updateRecipe({ id: parseInt(id), title, description });
    navigate(`/recipe/${id}`); // Go back to recipe details after saving
  };

  if (!recipeFound) {
    return <p>Loading recipe for editing or recipe not found...</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        rows="6"
        required
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Changes</button>
        <button
          type="button"
          onClick={() => navigate(`/recipe/${id}`)} // Go back without saving
          style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;