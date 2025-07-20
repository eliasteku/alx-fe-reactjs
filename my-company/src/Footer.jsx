// my-company/src/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto', // Pushes the footer to the bottom
      boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',
      fontSize: '0.9em'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p style={{ marginTop: '5px' }}>Designed with ❤️ for ALX</p>
    </footer>
  );
}

export default Footer;