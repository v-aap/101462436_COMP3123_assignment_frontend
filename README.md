# Employee Manager App - Frontend

## Features
- User-friendly interface for managing employees.
- Integrated search functionality to filter employees.
- Add, edit, view, and delete employee records.

## Project Structure
frontend/ ├── public/ ├── src/ │ ├── components/ │ │ ├── Header.js │ │ ├── Employees.js │ │ ├── AddEmployee.js │ │ ├── EditEmployee.js │ │ ├── ViewEmployee.js │ ├── App.js │ ├── index.js ├── package.json └── README.md


## Prerequisites
- Node.js
- npm
- Backend server running at `http://localhost:8081`

## Frontend Setup Instructions

### Install Dependencies
Navigate to the `frontend` directory and run:
npm install

## Start the Frontend
Run the frontend server:
npm start
Access the Frontend
The `frontend` will be accessible at: http://localhost:3000

## Technologies Used
React.js
Bootstrap
Axios
React Router
Deployment
To deploy the frontend, ensure the backend is accessible and update the API endpoints in the frontend components if necessary.

## Run the Project with Docker
Steps
1. Navigate to the project root directory.
2. Run the following command: 
   docker-compose up --build
3. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8081`
