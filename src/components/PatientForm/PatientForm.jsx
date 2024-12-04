import "./PatientForm.css";
import React, { useState } from "react";
import { TextField, IconButton, MenuItem } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const genders = [
  {
    value: "",
    label: "",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const PatientForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: null,
    gender: "",
    phoneNumber: "",
    patientType: "",
    address: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:8080/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dob: formData.dob ? formData.dob.format("YYYY-MM-DD") : null, // Format date properly
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccessMessage("Patient created successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        dob: null,
        gender: "",
        phoneNumber: "",
        patientType: "",
        address: "",
      });
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="dim-bg-overlay">
      <form className="patient-modal-form" onSubmit={handleSubmit}>
        <h2>New patient information</h2>
        <p>Please enter the patient’s information below.</p>

        <TextField
          id="firstName"
          label="First Name"
          margin="dense"
          value={formData.firstName}
          onChange={handleChange}
          required
          slotProps={{
            input: {
              sx: {
                display: "inline-block",
                marginInlineEnd: "12px",
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },

                width: "230px",
              },
            },
          }}
          variant="filled"
        />

        <TextField
          id="lastName"
          label="Last Name"
          margin="dense"
          value={formData.lastName}
          onChange={handleChange}
          required
          slotProps={{
            input: {
              sx: {
                display: "inline-block",
                marginInlineEnd: "12px",
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
                width: "230px",
              },
            },
          }}
          variant="filled"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="dob"
            label="Date of Birth"
            value={formData.dob}
            onChange={handleDateChange}
            slotProps={{
              textField: {
                //fullWidth: true,
                variant: "filled",
                margin: "dense",
                sx: {
                  display: "inline-block",
                  marginInlineEnd: "12px",
                  borderRadius: "16px",
                  backgroundColor: "#f5f5f6",
                  "&&&:before": { borderBottom: "none" },
                  "&&:after": { borderBottom: "none" },
                },
              },
            }}
            sx={{
              "&&&:before": { borderBottom: "none" },
              "&&:after": { borderBottom: "none" },
              "& .MuiInputBase-root": {
                background: "none",
                border: "none",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </LocalizationProvider>

        <TextField
          id="gender"
          select
          label="Gender"
          margin="dense"
          value={formData.gender}
          onChange={handleChange}
          required
          slotProps={{
            select: { native: true },
            input: {
              sx: {
                display: "inline-block",
                marginInlineEnd: "12px",
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
                width: "100px",
              },
            },
          }}
          variant="filled"
        >
          {genders.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
            id="phoneNumber"
          label={"Phone Number"}
          margin="dense"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          slotProps={{
            input: {
              sx: {
                display: "inline-block",
                marginInlineEnd: "12px",
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
              },
            },
          }}
          variant="filled"
        />

        <TextField
          id="patientType"
          label="Patient Type"
          margin="dense"
          value={formData.patientType}
          onChange={handleChange}
          required
          slotProps={{
            input: {
              sx: {
                // display: 'inline-block',
                // marginInlineEnd: '12px',
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
              },
            },
          }}
          variant="filled"
        />

        <TextField
          id="address"
          label="Address"
          margin="dense"
          fullWidth={true}
          value={formData.address}
          onChange={handleChange}
          slotProps={{
            input: {
              sx: {
                // display: 'inline-block',
                // marginInlineEnd: '12px',
                borderRadius: "16px",
                backgroundColor: "#f5f5f6",
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
              },
            },
          }}
          variant="filled"
        />

        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={closeForm}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
