import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    salary: "",
    date_of_joining: "",
    department: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/v1/emp/employees", employee);
      navigate("/employees");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="container mt-5">
      <Header />
      <h2 className="mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        {Object.keys(employee).map((key) => (
          <div className="form-group mb-3" key={key}>
            <label
              htmlFor={key}
              className="form-label"
              style={{ textTransform: "capitalize" }}
            >
              {key.replace("_", " ")}
            </label>
            <input
              type={
                key === "salary"
                  ? "text" // Changed to "text" to remove number arrows
                  : key === "date_of_joining"
                  ? "date"
                  : "text"
              }
              id={key}
              name={key}
              className="form-control"
              value={employee[key]}
              onChange={handleChange}
              placeholder={key === "salary" ? "e.g., 50000.00" : ""}
              pattern={key === "salary" ? "^\\d+(\\.\\d{2})?$" : undefined} // Pattern for salary
              title={
                key === "salary"
                  ? "Enter a valid dollar amount (e.g., 50000.00)"
                  : undefined
              }
              required
            />
          </div>
        ))}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
