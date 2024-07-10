import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, handleEdit, handleDelete }) => {
  return (
        <div className="employee-list">
      {employees.map(employee => (
        <div key={employee.id} className="employee-card">
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Surname: {employee.surname}</p>
          <p>Email: {employee.email}</p>
          <p>Phone: {employee.phone}</p>
          <p>Position: {employee.position}</p>
          {employee.image && (
            <img src={employee.image} alt={employee.name} className="employee-image" />
          )}
          <button className='deleteButton' onClick={() => handleEdit(employee)}>Edit</button>
          <button className = 'editButton' onClick={() => handleDelete(employee.id)}>Delete</button>
        </div>
      ))}
    </div>
    
  );
};

export default EmployeeList;
