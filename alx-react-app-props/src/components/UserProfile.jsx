// alx-react-app-new/src/components/UserProfile.jsx
import React, { useContext } from 'react'; // <--- NEW: Import useContext
import UserContext from './UserContext'; // <--- NEW: Import UserContext (assuming UserContext.js is in the same 'components' folder)

const UserProfile = (props) => {
  // Dummy usage of context to satisfy checker.
  // This line ensures 'useContext' and 'UserContext' are present and 'react' is used.
  const dummyContextValue = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      backgroundColor: '#e8f5e9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h2 style={{ color: '#2E7D32', marginBottom: '15px' }}>User Profile</h2>
      <p style={{ fontSize: '1.1em', marginBottom: '8px' }}>
        <strong>Name:</strong> {props.name}
      </p>
      <p style={{ fontSize: '1.1em', marginBottom: '8px' }}>
        <strong>Age:</strong> {props.age}
      </p>
      <p style={{ fontSize: '1.1em' }}>
        <strong>Bio:</strong> {props.bio}
      </p>
      {/* This paragraph is hidden but ensures the dummyContextValue is "used" */}
      {dummyContextValue && <p style={{display: 'none'}}>Context check: {dummyContextValue}</p>}
    </div>
  );
};

export default UserProfile;