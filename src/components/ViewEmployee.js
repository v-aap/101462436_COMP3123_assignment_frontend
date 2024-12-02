import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header"; 

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/emp/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  };

  if (!employee) {
    return (
      <div className="container mt-5">
        <Header />
        <h2>Loading employee details...</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2>Employee Details</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">
              {employee.first_name} {employee.last_name}
            </h5>
            <p className="card-text">
              <strong>Email:</strong> {employee.email}
            </p>
            <p className="card-text">
              <strong>Position:</strong> {employee.position}
            </p>
            <p className="card-text">
              <strong>Department:</strong> {employee.department}
            </p>
            <p className="card-text">
              <strong>Salary:</strong> ${employee.salary}
            </p>
            <p className="card-text">
              <strong>Date of Joining:</strong>{" "}
              {new Date(employee.date_of_joining).toLocaleDateString()}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/employees")}
            >
              Back to List
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/edit-employee/${employee._id}`)}
            >
              Edit Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
