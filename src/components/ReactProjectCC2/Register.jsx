import React from 'react';
import './Register.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//import { addNewUser } from '../services/user_api';

const Register = () => {
  const navigate = useNavigate();

  
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
    gender: ""
  });

  const handleInputChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3005/patients",data);
    navigate('/home');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <p style={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: 'bold'}}>CREATE AN ACCOUNT</p>
          <div>
            <label>Username</label>
            <input type='text' style={{ width: '300px' }} required onChange={(event) => handleInputChange(event, 'username')} />
          </div>
          <div>
            <label>Email</label>
            <input type='email' style={{ width: '300px' }} required onChange={(event) => handleInputChange(event, 'email')} />
          </div>
          <div>
            <label>Gender</label>
            <input type='text' required style={{ width: '300px' }} onChange={(event) => handleInputChange(event, 'gender')} />
          </div>
          <div>
            <label>Date of Birth</label>
            <input type='date' required style={{ width: '300px' }} onChange={(event) => handleInputChange(event, 'dob')} />
          </div>
          <div>
            <label>Password</label>
            <input type='password' style={{ width: '300px' }} required onChange={(event) => handleInputChange(event, 'password')} />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='password' required style={{ width: '300px' }} onChange={(event) => handleInputChange(event, 'confirmPassword')} />
          </div>
          <div>
            <Button variant="outlined" type='submit' style={{ width: '280px' }}>SIGN UP</Button>
          </div>
          <div>
            <p style={{ textAlign: 'center' }}>Already have an account?</p>
            <Button variant="contained" style={{ marginLeft: '5px', width: '280px' }} onClick={() => navigate('/login')}>Sign in</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
