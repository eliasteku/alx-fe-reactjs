// my-company/src/Services.jsx
import React from 'react';

function Services() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fff3e0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '20px auto', maxWidth: '800px' }}>
      <h1 style={{ color: '#ffc107', fontSize: '3em', marginBottom: '20px' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '600px' }}>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #ff9800', textAlign: 'left', fontSize: '1.1em', color: '#333' }}>
          <strong>Technology Consulting:</strong> Guiding your business through digital transformation with expert advice and innovative solutions.
        </li>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #ff9800', textAlign: 'left', fontSize: '1.1em', color: '#333' }}>
          <strong>Market Analysis:</strong> Providing in-depth market research and insights to help you make informed business decisions.
        </li>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #ff9800', textAlign: 'left', fontSize: '1.1em', color: '#333' }}>
          <strong>Product Development:</strong> From concept to launch, we build robust and scalable products tailored to your needs.
        </li>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #ff9800', textAlign: 'left', fontSize: '1.1em', color: '#333' }}>
          <strong>Digital Marketing:</strong> Crafting strategies to enhance your online presence and reach your target audience effectively.
        </li>
      </ul>
      <img
        src="https://placehold.co/600x300/FFECB3/000000?text=Services+Offered"
        alt="Services Offered Placeholder"
        style={{ marginTop: '30px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/CCCCCC/000000?text=Image+Not+Available"; }}
      />
    </div>
  );
}

export default Services;