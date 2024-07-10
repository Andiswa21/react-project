import React, { useState, useEffect } from 'react';
import EmployeeForm from './componenets/EmployeeForm';
import EmployeeList from './componenets/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await fetch('http://localhost:8000/employees');
    const data = await response.json();
    setEmployees(data);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/employees/${id}`, {
      method: 'DELETE',
    });
    fetchEmployees();
  };

  const refreshEmployees = () => {
    fetchEmployees();
    setSelectedEmployee(null);
  };

  return (
    
    <div className="app-container">
      <h1>Employee Enrollment App </h1>
      <div className="form-section">
        <EmployeeForm selectedEmployee={selectedEmployee} refreshEmployees={refreshEmployees} />
      </div>
      <div className="list-section">
      <h1>List of Employees </h1>
        <EmployeeList employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
