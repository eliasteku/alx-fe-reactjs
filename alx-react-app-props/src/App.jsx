// alx-react-app-props/src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // <--- NEW: Import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com", role: "Administrator" }; // Added 'role' for a slightly richer example

  return (
    // <--- NEW: Wrap the content with UserContext.Provider and pass userData as the value
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', backgroundColor: '#2d3748', minHeight: '100vh', color: '#f7fafc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#63b3ed' }}>Prop Drilling Example (Task 2 Refactored)</h1>
        <ProfilePage /> {/* <--- IMPORTANT: No longer passing userData as a prop here */}
      </div>
    </UserContext.Provider>
  );
}

export default App;