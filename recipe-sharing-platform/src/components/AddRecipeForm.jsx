import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // <-- CHANGED 'validationErrors' to 'errors'

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }
    setErrors(newErrors); // <-- CHANGED 'setValidationErrors' to 'setErrors'
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = { title, ingredients, steps };
      console.log('New Recipe Submitted:', newRecipe);
      
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({}); // <-- CHANGED 'setValidationErrors' to 'setErrors'

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
            {errors.title && ( // <-- CHANGED 'validationErrors' to 'errors'
              <p className="mt-1 text-sm text-red-500">
                {errors.title}
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
            {errors.ingredients && ( // <-- CHANGED 'validationErrors' to 'errors'
              <p className="mt-1 text-sm text-red-500">
                {errors.ingredients}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="steps"
              className="block text-lg font-medium text-gray-700"
            >
              Preparation Steps
            </label>
            <textarea
              id="steps"
              rows="6"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.steps && ( // <-- CHANGED 'validationErrors' to 'errors'
              <p className="mt-1 text-sm text-red-500">
                {errors.steps}
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