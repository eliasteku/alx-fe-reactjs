// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'; // Import the new SearchBar
import { useRecipeStore } from './components/recipeStore';
import { useEffect } from 'react';

import './App.css';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Get filter action

  useEffect(() => {
    // Only set if recipes are empty to avoid resetting on every render
    if (useRecipeStore.getState().recipes.length === 0) {
      setRecipes([
        { id: 1, title: 'Classic Spaghetti Carbonara', description: 'A traditional Roman pasta dish made with eggs, hard cheese (Pecorino Romano or Parmigiano-Reggiano), cured pork (guanciale or pancetta), and black pepper.' },
        { id: 2, title: 'Spicy Chicken Stir-Fry', description: 'Quick and easy stir-fry with tender chicken, crisp vegetables, and a savory, spicy sauce. Perfect for a weeknight meal.' },
        { id: 3, title: 'Vegetable Lasagna', description: 'Layers of pasta, rich tomato sauce, creamy ricotta, and a medley of fresh vegetables, baked to golden perfection.' }
      ]);
    }
    // Ensure initial filtering happens when component mounts or recipes are set
    filterRecipes();
  }, [setRecipes, filterRecipes]);


  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
            <Link to="/add-recipe" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Add New Recipe</Link>
          </div>
          {/* Place SearchBar prominently */}
          <SearchBar />
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;