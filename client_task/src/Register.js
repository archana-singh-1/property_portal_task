import "./Register.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ name: '', email: '', password: '' });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/registerpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response:', data);
        setInputData(data);
        alert("Register is successful");
         // Use navigate function from useNavigate hook
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        className="input_btn"
        name="name"
        placeholder="Enter Name"
        value={inputData.name}
        onChange={handleData}
      />
      <input
        className="input_btn"
        type="text"
        name="email"
        placeholder="Enter Email"
        value={inputData.email}
        onChange={handleData}
      />
      <input
        type="password"
        name="password"
        className="input_btn"
        placeholder="Enter password"
        value={inputData.password}
        onChange={handleData}
      />

      <div className="register_btn"onClick={handleSubmit}>
        Register
      </div>
      <div>or</div>
      <button onClick={()=>navigate("/login")}>login</button>
    </div>
  );
}

export default Register;