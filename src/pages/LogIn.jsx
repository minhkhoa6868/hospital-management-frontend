import './Login.css'
import LogoCorner from '../components/LogoCorner/LogoCorner'

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

import { TextField, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

function LogIn() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleLogin = () => {
        // Logic to verify credentials (e.g., API call)
        authContext.logIn(); // Update the `isLogin` state to true
        navigate('/home');
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    return (
      <>
        <LogoCorner/>
        <div className='login-container'>
          <LoginRoundedIcon sx={{
            padding: 2,
            marginBottom: 2,
            fontSize: 36,
            backgroundColor: '#fff',
            boxShadow: '0 8px 30px #e2ddec',
            borderRadius: 5
          }}/>
          <div className='login-header'>Log in as Manager</div>
          <div className='login-subheader'>Log in with your provided Manager account to access the hospital's database</div>

          <TextField
            id="input-with-icon-textfield"
            label=""
            fullWidth
            required
            placeholder="Username"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: '16px',
                  backgroundColor: '#f5f5f6',
                  "& fieldset": { border: 'none' },
                  marginBottom: '12px'
                },
              },
            }}
            variant="outlined"
          />

          <TextField
            id="input-with-icon-textfield"
            label=""
            fullWidth
            required
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyRoundedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: '16px',
                  backgroundColor: '#f5f5f6',
                  "& fieldset": { border: 'none' },
                  marginBottom: '40px'
                },
              },
            }}
            variant="outlined"
          />
          
          <button onClick={handleLogin} className="login-button">Log In</button>
        </div>
      </>
    );
  }
  
export default LogIn;