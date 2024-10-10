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

  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    if (selectedEmployee) {
      setInputs(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === 'image' ? URL.createObjectURL(event.target.files[0]) : event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchId) {
      try {
        const response = await fetch(`http://localhost:3000/employees/${searchId}`);
        if (!response.ok) {
          throw new Error('Employee not found');
        }
        const data = await response.json();
        setInputs(data); // Input the form with the employee data
      } catch (error) {
        console.error('Error fetching employee:', error);
        alert('Employee not found. Please check the ID and try again.');
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate ID and phone number
    if (!/^\d{13}$/.test(inputs.id)) {
      alert('ID must be exactly 13 digits long');
      return;
    }
    if (!/^\d{10}$/.test(inputs.phone)) {
      alert('Phone number must be exactly 10 digits long');
      return;
    }

    const method = selectedEmployee ? 'PUT' : 'POST';
    const url = selectedEmployee ? `http://localhost:3000/employees/${inputs.id}` : 'http://localhost:3000/employees';

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
      setSearchId(''); // Reset 
      refreshEmployees();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <>
   

      <form onSubmit={handleSubmit} className="form-container d-flex justify-content-center align-items-center">
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
          <br /><br />
      <form onSubmit={handleSearch} className="search-container">
        <label>
          Search by ID:
          <input
            type="number"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default EmployeeForm;
