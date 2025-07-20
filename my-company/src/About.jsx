// my-company/src/About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '20px auto', maxWidth: '800px' }}>
      <h1 style={{ color: '#28a745', fontSize: '3em', marginBottom: '20px' }}>About Us</h1>
      <p style={{ color: '#333', fontSize: '1.2em', lineHeight: '1.6', marginBottom: '20px' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy. Our mission is to empower businesses with innovative solutions and unparalleled support.
      </p>
      <p style={{ color: '#555', fontSize: '1.1em', lineHeight: '1.5' }}>
        We believe in fostering long-term relationships with our clients, built on trust, transparency, and mutual success. Our team comprises highly skilled professionals dedicated to achieving your goals.
      </p>
      <img
        src="https://placehold.co/600x300/C8E6C9/000000?text=Our+Team"
        alt="Our Team Placeholder"
        style={{ marginTop: '30px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/CCCCCC/000000?text=Image+Not+Available"; }}
      />
    </div>
  );
}

export default About;