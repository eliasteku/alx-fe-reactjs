// alx-react-app-props/src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails'; // <--- This component will also be created/updated

function UserInfo({ userData }) { // <--- It receives userData as a prop
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#e9e9e9', maxWidth: '350px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h4 style={{ textAlign: 'center', color: '#555', marginBottom: '15px' }}>User Info Component</h4>
      <UserDetails userData={userData} /> {/* <--- It passes userData down to UserDetails */}
    </div>
  );
}

export default UserInfo;