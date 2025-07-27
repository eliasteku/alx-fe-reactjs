// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';       // Import FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList
import { useRecipeStore } from './components/recipeStore';
import { useEffect } from 'react';

import './App.css';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations); // Get generate action

  useEffect(() => {
    if (useRecipeStore.getState().recipes.length === 0) {
      setRecipes([
        { id: 1, title: 'Classic Spaghetti Carbonara', description: 'A traditional Roman pasta dish made with eggs, hard cheese (Pecorino Romano or Parmigiano-Reggiano), cured pork (guanciale or pancetta), and black pepper.' },
        { id: 2, title: 'Spicy Chicken Stir-Fry', description: 'Quick and easy stir-fry with tender chicken, crisp vegetables, and a savory, spicy sauce. Perfect for a weeknight meal.' },
        { id: 3, title: 'Vegetable Lasagna', description: 'Layers of pasta, rich tomato sauce, creamy ricotta, and a medley of fresh vegetables, baked to golden perfection.' },
        { id: 4, title: 'Mango Sticky Rice', description: 'A traditional Thai dessert made with sticky rice, fresh mango slices, and coconut milk.' },
        { id: 5, title: 'Beef Tacos', description: 'Flavorful ground beef served in crispy taco shells with fresh salsa, lettuce, and cheese.' }
      ]);
    }
    filterRecipes(); // Initial filter
    generateRecommendations(); // Initial recommendations
  }, [setRecipes, filterRecipes, generateRecommendations]); // Include generateRecommendations in deps

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
            <Link to="/add-recipe" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Add New Recipe</Link>
          </div>
          <SearchBar />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <FavoritesList />         {/* Display Favorites List on home page */}
                <RecommendationsList />   {/* Display Recommendations List on home page */}
              </>
            }
          />
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