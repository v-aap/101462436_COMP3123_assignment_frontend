import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Employees from "./components/Employees";
import LandingPage from "./components/LandingPage";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ViewEmployee from "./components/ViewEmployee"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/view-employee/:id" element={<ViewEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
