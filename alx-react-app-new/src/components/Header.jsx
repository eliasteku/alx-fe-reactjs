// alx-react-app-new/src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    // Added inline styles for background, text color, alignment, padding, and some minor visual enhancements
    <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '20px 0', borderRadius: '8px', marginBottom: '20px', width: '100%', maxWidth: '800px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
      <h1>My Favorite Cities</h1>
      {/* Keeping the nav for completeness, though not explicitly in your current snippet */}
      <nav style={{ marginTop: '10px' }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontWeight: 'bold' }}>Home</a>
        <a href="#profile" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontWeight: 'bold' }}>Profile</a>
      </nav>
    </header>
  );
}

export default Header;