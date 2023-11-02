import "./Login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const storeData = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/loginpost", { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Response:', data);
                alert("Login is successful");
                

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form className="register" onClick={handleSubmit}>
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Enter Email" value={user.email} onChange={storeData} />
            <input type="password" name="password" placeholder="Enter password" value={user.password} onChange={storeData} /> {/* Changed input type to 'password' for the password field */}
            <button type="submit" className="button"  onClick={()=>navigate("/homepage")}>
                Submit
            </button>
            <div>or</div>
            <div className="button" >Register</div>


        </form>
    );
};

export default Login;