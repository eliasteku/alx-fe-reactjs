// alx-react-app-new/src/components/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Make sure you have 'prop-types' installed (npm install prop-types)

const UserProfile = (props) => {
  return (
    // Added inline styles for border, padding, margin, shadow, background, etc. to the main div
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', maxWidth: '400px', backgroundColor: '#f9f9f9', color: '#333', textAlign: 'center' }}>
      {/* Styled the h2 for color, font size, and margin */}
      <h2 style={{ color: '#0056b3', fontSize: '2em', marginBottom: '10px' }}>{props.name}</h2>
      {/* Styled the p tag and the span inside it for age */}
      <p style={{ fontSize: '1.1em', marginBottom: '8px' }}>Age: <span style={{ fontWeight: 'bold', color: '#666' }}>{props.age}</span></p>
      {/* Styled the p tag for bio */}
      <p style={{ fontSize: '1em', lineHeight: '1.5', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

// Added propTypes for type checking, as per good React practice and previous discussions
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired, // Ensure this is PropTypes.number
  bio: PropTypes.string
};

// Added defaultProps for default values if props are not provided
UserProfile.defaultProps = {
  bio: "No bio provided."
};

export default UserProfile;