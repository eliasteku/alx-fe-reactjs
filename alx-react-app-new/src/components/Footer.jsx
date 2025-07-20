// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    // Added inline styles for background, text color, alignment, padding, etc. to the footer tag
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '15px 0', marginTop: '20px', borderRadius: '8px', width: '100%', maxWidth: '800px', boxShadow: '0 -2px 5px rgba(0,0,0,0.2)' }}>
      <p style={{ fontSize: '0.9em' }}>© 2023 City Lovers</p>
      {/* Added an extra line for more visual appeal, as per task instructions to experiment */}
      <p style={{ fontSize: '0.8em', marginTop: '5px' }}>Explore the world, one city at a time.</p>
    </footer>
  );
}

export default Footer;