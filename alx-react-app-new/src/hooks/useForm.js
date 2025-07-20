// C:\Users\Elias\Desktop\alx-fe-reactjs\alx-react-app-new\src\hooks\useForm.js
import { useState } from 'react';

// This is a special function (a "custom hook") that helps manage forms.
// It keeps track of what you type in input boxes and helps when you click "submit".
const useForm = (initialValues, onSubmit) => {
  // 'values' will hold everything you type in the form (like name, email, etc.)
  const [values, setValues] = useState(initialValues);

  // This function runs every time you type something in an input box.
  const handleChange = (event) => {
    const { name, value } = event.target; // Gets the name of the input and what you typed
    setValues({
      ...values, // Keep all the other form values as they are
      [name]: value, // Update just the one input box that you typed in
    });
  };

  // This function runs when you click the "Submit" button on the form.
  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the browser from refreshing the page (default form behavior)
    if (onSubmit) {
      onSubmit(values); // Calls a function you give it, passing all the form data
    }
  };

  // We give back the current form values, and the two functions to handle changes and submission.
  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;