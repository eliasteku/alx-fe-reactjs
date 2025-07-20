// alx-react-app-props/src/UserDetails.jsx
import React from 'react'; // Make sure React is imported

function UserDetails({ userData }) { // <--- It receives userData as a prop
  return (
    <div style={{ border: '1px solid #bbb', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#e0e0e0', maxWidth: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h5 style={{ textAlign: 'center', color: '#666', marginBottom: '10px' }}>User Details Component</h5>
      <p style={{ marginBottom: '5px' }}>Name: <span style={{ fontWeight: 'bold' }}>{userData.name}</span></p>
      <p>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserDetails;