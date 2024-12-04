import "./Login.css";
import LogoCorner from "../../components/LogoCorner/LogoCorner";

import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

function LogIn() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          authContext.logIn(); // Update login state
          navigate("/patients");
        } else {
          setError("Login failed");
        }
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred");
    }
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
      <LogoCorner />
      <div className="login-container">
        <LoginRoundedIcon
          sx={{
            padding: 2,
            marginBottom: 2,
            fontSize: 36,
            backgroundColor: "#fff",
            boxShadow: "0 8px 30px #e2ddec",
            borderRadius: 5,
          }}
        />
        <div className="login-header">Log in as Manager</div>
        <div className="login-subheader">
          Log in with your provided Manager account to access the hospital's
          database
        </div>

        <TextField
          id="username-input"
          label=""
          fullWidth
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonRoundedIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "& fieldset": { border: "none" },
                marginBottom: "12px",
              },
            },
          }}
          variant="outlined"
        />

        <TextField
          id="password-input"
          label=""
          fullWidth
          required
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
                    edge="start"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "& fieldset": { border: "none" },
                marginBottom: "20px",
              },
            },
          }}
          variant="outlined"
        />

        {error && <div style={{ color: "red", paddingBottom: "20px" }}>{error}</div>}

        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
      </div>
    </>
  );
}

export default LogIn;
