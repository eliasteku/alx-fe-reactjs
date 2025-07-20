// alx-react-app-new/src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // <--- NEW: Import the Counter component

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', backgroundColor: '#2d3748', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter /> {/* <--- NEW: Include the Counter component here */}
      <Footer />
    </div>
  );
}

export default App;