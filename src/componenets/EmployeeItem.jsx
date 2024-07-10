import React from 'react';

const EmployeeItem = ({ employee, deleteEmployee, editEmployee }) => {
  return (
    <div className="employee-item">
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name} {employee.surname}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Position: {employee.position}</p>
      <img src={employee.image} alt="Employee" width="100" />
      <button className = "delete-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
      <button  className = "edit-button" onClick={() => editEmployee(employee)}>Edit</button>
    </div>
  );
};

export default EmployeeItem;
