import { useState, useEffect } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ selectedEmployee, refreshEmployees }) => {
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    image: '',
    position: ''
  });

  useEffect(() => {
    if (selectedEmployee) {
      setInputs(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === "image" ? URL.createObjectURL(event.target.files[0]) : event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const method = selectedEmployee ? 'PUT' : 'POST';
    const url = selectedEmployee ? `http://localhost:8000/employees/${inputs.id}` : 'http://localhost:8000/employees';

    const employeeData = {
      id: inputs.id,
      name: inputs.name,
      surname: inputs.surname,
      email: inputs.email,
      phone: inputs.phone,
      image: inputs.image,
      position: inputs.position
    };

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setInputs({
        id: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        image: '',
        position: ''
      });
      refreshEmployees();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (

    
    <form onSubmit={handleSubmit} className="form-container">
      <label>ID:
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={handleChange}
          required
        />
      </label>
      <label>Name:
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>Surname:
        <input
          type="text"
          name="surname"
          value={inputs.surname}
          onChange={handleChange}
          required
        />
      </label>
      <label>Email:
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>Phone:
        <input
          type="text"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>Image:
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
        {inputs.image && (
          <img src={inputs.image} alt="Preview" className="image-preview" />
        )}
      </label>
      <label>Position:
        <input
          type="text"
          name="position"
          value={inputs.position}
          onChange={handleChange}
          required
        />
      </label>
      <input type="submit" value={selectedEmployee ? 'Update Employee' : 'Add Employee'} />
    </form>
  );
};

export default EmployeeForm;
