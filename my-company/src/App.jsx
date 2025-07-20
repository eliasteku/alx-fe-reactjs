// my-company/src/App.jsx
import React from 'react';
// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

// CORRECTED PATH: Import Navbar from the components folder
import Navbar from './components/Navbar'; 
import Footer from './Footer'; // Optional - Adding a Footer component

function App() {
  return (
    // Wrap the entire application with BrowserRouter to enable routing
    <BrowserRouter>
      <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#333' }}>
        {/* The Navbar will appear on all pages */}
        <Navbar />

        {/* Define the routes for different pages */}
        <div style={{ flexGrow: 1, padding: '20px' }}> {/* Main content area */}
          <Routes>
            {/* Route for the Home page, exact path ensures it only matches "/" */}
            <Route path="/" element={<Home />} />
            {/* Route for the About page */}
            <Route path="/about" element={<About />} />
            {/* Route for the Services page */}
            <Route path="/services" element={<Services />} />
            {/* Route for the Contact page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Optional: Include a Footer component that appears on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;