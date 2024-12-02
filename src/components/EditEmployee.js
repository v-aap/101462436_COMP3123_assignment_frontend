import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    salary: "",
    date_of_joining: "",
    department: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/emp/employees/${id}`);
        setEmployee(response.data);
      } catch (err) {
        setMessage("Failed to fetch employee data.");
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/api/v1/emp/employees/${id}`, employee);
      setMessage("Employee updated successfully!");
      navigate("/employees");
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4">Edit Employee</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit} className="card p-4">
          <div className="form-group mb-3">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              value={employee.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              value={employee.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              className="form-control"
              placeholder="Position"
              value={employee.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="salary">Salary ($)</label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="form-control"
              placeholder="e.g., 50000.00"
              value={employee.salary}
              onChange={handleChange}
              pattern="^\d+(\.\d{2})?$" // Optional: Enforce dollar format
              title="Enter a valid dollar amount (e.g., 50000.00)"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="date_of_joining">Date of Joining</label>
            <input
              type="date"
              id="date_of_joining"
              name="date_of_joining"
              className="form-control"
              value={employee.date_of_joining.slice(0, 10)}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              className="form-control"
              placeholder="Department"
              value={employee.department}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Update Employee
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
