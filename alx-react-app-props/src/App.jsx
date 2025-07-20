// alx-react-app-props/src/App.jsx
import React from 'react'; // Make sure React is imported
import ProfilePage from './ProfilePage'; // <--- This should be ProfilePage

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // <--- Define userData here

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', backgroundColor: '#2d3748', minHeight: '100vh', color: '#f7fafc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#63b3ed' }}>Prop Drilling Example (Task 2 Initial)</h1>
      <ProfilePage userData={userData} /> {/* <--- Pass userData as a prop */}
    </div>
  );
}

export default App;