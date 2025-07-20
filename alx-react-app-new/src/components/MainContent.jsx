// alx-react-app-new/src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    // Added inline styles for padding, margin, background, border-radius, shadow, etc. to the main tag
    <main style={{ padding: '30px', margin: '20px auto', backgroundColor: '#e0f7fa', borderRadius: '8px', maxWidth: '800px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: '#004d40', textAlign: 'center', width: '100%' }}>
      <h2 style={{ color: '#00796b', fontSize: '2em', marginBottom: '15px' }}>My Travel Destinations</h2>
      {/* Styled the p tag for font size and line height */}
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>I love to visit New York, Paris, and Tokyo.</p>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', marginTop: '10px' }}>Each city offers a unique experience and unforgettable memories.</p>
    </main>
  );
}

export default MainContent;