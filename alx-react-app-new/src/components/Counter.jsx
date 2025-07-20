// alx-react-app-new/src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize state for the count, starting at 0
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Event handler for resetting the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ margin: '40px auto', padding: '30px', border: '2px solid #6a11cb', borderRadius: '12px', maxWidth: '300px', backgroundColor: '#f0f8ff', boxShadow: '0 6px 12px rgba(0,0,0,0.2)', color: '#333', textAlign: 'center' }}>
      <h2 style={{ color: '#6a11cb', fontSize: '2.2em', marginBottom: '20px' }}>Counter</h2>
      <p style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '30px', color: '#2575fc' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '15px' }}>
        <button
          onClick={increment}
          style={{
            backgroundColor: '#28a745', color: 'white', padding: '12px 20px', border: 'none',
            borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            backgroundColor: '#dc3545', color: 'white', padding: '12px 20px', border: 'none',
            borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          style={{
            backgroundColor: '#007bff', color: 'white', padding: '12px 20px', border: 'none',
            borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0069d9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;