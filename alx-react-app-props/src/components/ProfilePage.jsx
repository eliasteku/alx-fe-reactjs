// alx-react-app-props/src/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() { // <--- IMPORTANT: Removed { userData } from props destructuring
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px auto', borderRadius: '5px', backgroundColor: '#f0f0f0', maxWidth: '400px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '15px' }}>Profile Page Component</h3>
      <UserInfo /> {/* <--- IMPORTANT: No longer passing userData as a prop to UserInfo */}
    </div>
  );
}

export default ProfilePage;