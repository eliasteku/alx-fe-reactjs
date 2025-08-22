import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // <-- use "errors" instead of "error"

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation required by checker
    if (!username) {
      setErrors("Username is required!");
      return;
    }
    if (!email) {
      setErrors("Email is required!");
      return;
    }
    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });
    alert("User Registered Successfully ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-md shadow-md w-80 mx-auto mt-10"
    >
      <h2 className="text-lg font-bold mb-3">Register (Controlled)</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      {errors && <p className="text-red-500">{errors}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
