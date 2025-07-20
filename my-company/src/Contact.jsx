// my-company/src/Contact.jsx
import React, { useState } from 'react'; // Import useState for form handling

function Contact() {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    // Update the formData state, preserving existing values and updating the specific field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    // Display an alert with the submitted data
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Log to console (optional, for debugging)
    console.log('Contact form data:', formData);
    // You could also reset the form here if needed:
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '20px auto', maxWidth: '800px' }}>
      <h1 style={{ color: '#2196f3', fontSize: '3em', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ color: '#333', fontSize: '1.2em', lineHeight: '1.6', marginBottom: '30px' }}>
        Have questions or need assistance? Reach out to us using the form below, and we'll get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em' }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5" // Make the textarea taller
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em', resize: 'vertical' }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#2196f3', color: 'white', padding: '12px 25px', border: 'none',
            borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            alignSelf: 'flex-end' // Align button to the right
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1976d2'} // Darken on hover
          onMouseOut={(e) => e.target.style.backgroundColor = '#2196f3'} // Revert on mouse out
        >
          Send Message
        </button>
      </form>
      <img
        src="https://placehold.co/600x300/BBDEFB/000000?text=Contact+Us"
        alt="Contact Us Placeholder"
        style={{ marginTop: '30px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/CCCCCC/000000?text=Image+Not+Available"; }}
      />
    </div>
  );
}

export default Contact;