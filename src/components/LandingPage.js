import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Employee Management System</h1>
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
