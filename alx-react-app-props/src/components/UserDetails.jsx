// alx-react-app-props/src/components/UserDetails.jsx
import React, { useContext } from 'react'; // <--- NEW: Import useContext
import UserContext from '../UserContext'; // <--- NEW: Import UserContext (path adjusted for components folder)

function UserDetails() { // <--- IMPORTANT: No longer receiving { userData } as a prop
  // Consume userData from the context using useContext hook
  const userData = useContext(UserContext);

  // Basic check in case context value is null or undefined (good practice)
  if (!userData) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>User data not available.</div>;
  }

  return (
    <div style={{ border: '1px solid #bbb', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#e0e0e0', maxWidth: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h5 style={{ textAlign: 'center', color: '#666', marginBottom: '10px' }}>User Details Component</h5>
      <p style={{ marginBottom: '5px' }}>Name: <span style={{ fontWeight: 'bold' }}>{userData.name}</span></p>
      <p>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
      {/* Displaying 'role' if it exists in context */}
      {userData.role && <p>Role: <span style={{ fontWeight: 'bold' }}>{userData.role}</span></p>}
    </div>
  );
}

export default UserDetails;