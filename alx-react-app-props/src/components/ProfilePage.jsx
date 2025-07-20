// alx-react-app-props/src/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo'; // <--- This component will also be created/updated

function ProfilePage({ userData }) { // <--- It receives userData as a prop
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#f0f0f0', maxWidth: '400px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '15px' }}>Profile Page Component</h3>
      <UserInfo userData={userData} /> {/* <--- It passes userData down to UserInfo */}
    </div>
  );
}

export default ProfilePage;