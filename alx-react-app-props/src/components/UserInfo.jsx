// alx-react-app-props/src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails'; // Path to UserDetails is in the same folder

function UserInfo() { // <--- IMPORTANT: Removed { userData } from props destructuring
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#e9e9e9', maxWidth: '350px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h4 style={{ textAlign: 'center', color: '#555', marginBottom: '15px' }}>User Info Component</h4>
      {/* IMPORTANT: No longer passing userData as a prop to UserDetails */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;