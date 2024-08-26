import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        // Basic validation
        if (formData.email === '' || formData.password === '') {
            setError('Both fields are required.');
            return;
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.user) {
                console.log(data.user);
                navigate('/home', { replace: true });
            } else {
                setError('Invalid email or password.');
            }
        })
        .catch(error => {
            console.error(error);
            setError('An error occurred. Please try again.');
        });
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
