// alx-react-app-props/src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // <--- NEW: Import UserContext

function App() {
  // Define userData here, including a 'role' for a richer example
  const userData = { name: "Jane Doe", email: "jane.doe@example.com", role: "Administrator" };

  return (
    // NEW: Wrap the content with UserContext.Provider and pass userData as the value
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', backgroundColor: '#2d3748', minHeight: '100vh', color: '#f7fafc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#63b3ed' }}>Prop Drilling Example (Task 2 Refactored)</h1>
        {/* IMPORTANT: ProfilePage no longer receives userData as a prop here */}
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;