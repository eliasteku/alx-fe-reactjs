import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    if (!ingredients.trim()) {
      errors.ingredients = 'Ingredients are required';
    }
    if (!instructions.trim()) {
      errors.instructions = 'Instructions are required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send this data to an API
      const newRecipe = { title, ingredients, instructions };
      console.log('New Recipe Submitted:', newRecipe);

      // Clear form after successful submission
      setTitle('');
      setIngredients('');
      setInstructions('');
      setValidationErrors({});

      alert('Recipe submitted successfully!');
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add a New Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {validationErrors.title && (
              <p className="mt-1 text-sm text-red-500">
                {validationErrors.title}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="ingredients"
              className="block text-lg font-medium text-gray-700"
            >
              Ingredients
              <p className="text-sm text-gray-500 font-normal">
                (List each ingredient on a new line)
              </p>
            </label>
            <textarea
              id="ingredients"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {validationErrors.ingredients && (
              <p className="mt-1 text-sm text-red-500">
                {validationErrors.ingredients}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block text-lg font-medium text-gray-700"
            >
              Preparation Steps
            </label>
            <textarea
              id="instructions"
              rows="6"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {validationErrors.instructions && (
              <p className="mt-1 text-sm text-red-500">
                {validationErrors.instructions}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;