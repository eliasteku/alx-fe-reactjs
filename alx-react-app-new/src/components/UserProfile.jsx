// alx-react-app-new/src/components/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', maxWidth: '400px', backgroundColor: '#f9f9f9', color: '#333', textAlign: 'center' }}>
      {/* CHANGE THIS LINE: from '#0056b3' to 'blue' */}
      <h2 style={{ color: 'blue', fontSize: '2em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1em', marginBottom: '8px' }}>Age: <span style={{ fontWeight: 'bold', color: '#666' }}>{props.age}</span></p>
      <p style={{ fontSize: '1em', lineHeight: '1.5', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string
};

UserProfile.defaultProps = {
  bio: "No bio provided."
};

export default UserProfile;