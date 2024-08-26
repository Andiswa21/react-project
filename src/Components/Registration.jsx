import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Registration = () => {
    const [formData , setFormData] = useState({
        email : '' ,
        password : '' 
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:8000/users' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        navigate('/login',{replace : true});
    })
    .catch((error) => console.error(error));
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate();
  return (
    <div className='container'>
    <form className= "login-form" onSubmit={e=>handleSubmit(e)}>
    <h1>Registration Page</h1>
    <input type="email" placeholder='email@gmail.com' value = {formData.email} name="email" onChange={e=>handleChange(e)}/>
    <input type="password" placeholder='enter password' value = {formData.password} name="password" onChange={e=>handleChange(e)}/>
    <button className='register-btn' type='submit'> SignUp</button>
    </form>
    <button className="member-btn" onClick={(e)=> handleSubmit(e)}>already have an account?</button>
    </div>
  )
}

export default Registration;
