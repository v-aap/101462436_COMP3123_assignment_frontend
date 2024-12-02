import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Credentials to be sent:", credentials); // Log credentials
  
    try {
      const response = await axios.post("http://localhost:8081/api/v1/user/login", credentials);
  
      console.log("Server response:", response.data); // Log server response
  
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/employees");
      }
    } catch (err) {
      console.error("Error response:", err.response?.data || err.message); // Log error details
      setError("Invalid email or password");
    }
  };
  
  

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", width: "100%" }}>
          Login
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "none",
            color: "blue",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Sign up here
        </button>
      </p>
    </div>
  );
};

export default Login;
