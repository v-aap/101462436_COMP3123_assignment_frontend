import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    console.log("User details being submitted:", userDetails); // Log user details before submission

    try {
      // Make the signup request to the backend
      const response = await axios.post("http://localhost:8081/api/v1/user/signup", userDetails);

      if (response.status === 201) {
        // Navigate to the login page on successful signup
        navigate("/login");
      } else {
        // Handle unexpected response codes
        setError("Unexpected error during signup. Please try again.");
      }
    } catch (err) {
      // Handle errors from the server or network
      if (err.response) {
        // Server responded with a status outside 2xx
        setError(err.response.data.message || "Error during signup. Please try again.");
      } else if (err.request) {
        // Request was made but no response received
        setError("No response from the server. Please try again later.");
      } else {
        // Other errors
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
