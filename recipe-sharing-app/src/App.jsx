// C:\Users\Elias\Desktop\alx-fe-reactjs\recipe-sharing-app\src\App.jsx
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './recipeStore';
import './App.css'; // Keep if you have this file, otherwise remove or create

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;