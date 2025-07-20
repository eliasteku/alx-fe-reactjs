// alx-react-app-new/src/components/UserForm.jsx
import React from 'react';
import useForm from '../hooks/useForm'; // <--- NEW: Import our custom useForm hook

function UserForm() {
  // Initialize the form with empty initial values for name and email
  // The useForm hook gives us 'values' (current form data), 'handleChange' (for inputs),
  // and 'handleSubmit' (for form submission).
  const { values, handleChange, handleSubmit } = useForm(
    { name: '', email: '' }, // Initial state for form fields
    (formData) => { // This is the onSubmit callback function that useForm will call
      // When the form is submitted, this function will run with the form data.
      // For now, we'll just log it to the console.
      console.log('Form submitted with data:', formData);
      // In a real app, you might send this data to a server or update global state.
      alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`); // Using alert as a simple visual feedback
    }
  );

  return (
    <div style={{ margin: '40px auto', padding: '30px', border: '2px solid #6a11cb', borderRadius: '12px', maxWidth: '400px', backgroundColor: '#f0f8ff', boxShadow: '0 6px 12px rgba(0,0,0,0.2)', color: '#333', textAlign: 'center' }}>
      <h2 style={{ color: '#6a11cb', fontSize: '2.2em', marginBottom: '20px' }}>User Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name" // IMPORTANT: 'name' attribute must match the key in 'values' state
            value={values.name} // Controlled component: input value is tied to state
            onChange={handleChange} // Call handleChange on every input change
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email" // Use type="email" for email validation
            id="email"
            name="email" // IMPORTANT: 'name' attribute must match the key in 'values' state
            value={values.email} // Controlled component: input value is tied to state
            onChange={handleChange} // Call handleChange on every input change
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff', color: 'white', padding: '12px 20px', border: 'none',
            borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold',
            marginTop: '10px', transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0069d9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;