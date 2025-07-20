// my-company/src/Home.jsx
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#e0f7fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '20px auto', maxWidth: '800px' }}>
      <h1 style={{ color: '#007bff', fontSize: '3em', marginBottom: '20px' }}>Welcome to Our Company</h1>
      <p style={{ color: '#333', fontSize: '1.2em', lineHeight: '1.6' }}>
        We are dedicated to delivering excellence in all our services. Explore our site to learn more about what we offer.
      </p>
      <img
        src="https://placehold.co/600x300/ADD8E6/000000?text=Company+Homepage"
        alt="Company Homepage Placeholder"
        style={{ marginTop: '30px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/CCCCCC/000000?text=Image+Not+Available"; }}
      />
    </div>
  );
}

export default Home;