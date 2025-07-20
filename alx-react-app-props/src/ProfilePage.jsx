// alx-react-app-props/src/ProfilePage.jsx
import React from 'react';
import UserInfo from './components/UserInfo'; // Correct path for UserInfo

function ProfilePage() { // <--- IMPORTANT CHANGE: NO LONGER RECEIVING { userData } AS A PROP
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#f0f0f0', maxWidth: '400px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '15px' }}>Profile Page Component</h3>
      {/* IMPORTANT CHANGE: NO LONGER PASSING userData AS A PROP TO UserInfo */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;