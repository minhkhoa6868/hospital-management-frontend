import './Login.css'

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';


function LogIn() {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = () => {
        // Logic to verify credentials (e.g., API call)
        navigate('/home');
        logIn(); // Update the `isLogin` state to true
    };
  
    return (
      <div className='login-container'>
        <button onClick={handleLogin} className="login-button">Log In</button>
      </div>
    );
  }
  
export default LogIn;