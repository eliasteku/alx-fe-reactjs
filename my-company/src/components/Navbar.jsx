// my-company/src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'center', // Center the links
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      position: 'sticky', // Make it sticky at the top
      top: 0,
      zIndex: 1000 // Ensure it stays on top of other content
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '30px' // Space between links
      }}>
        <li>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Home</Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >About</Link>
        </li>
        <li>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;