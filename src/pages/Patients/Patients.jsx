import "./Patients.css";
import "../../components/PatientList/PatientList";
import PatientList from "../../components/PatientList/PatientList";
import PatientForm from "../../components/PatientForm/PatientForm";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";

import { TextField, IconButton, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid2";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const Patients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

  // Fetch data from the backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:8080/patient/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const patients = await response.json();
        setData(patients); // Set data from backend
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    fetchPatients();
  }, []);

  const handleMouseDownSearch = (event) => {
    event.preventDefault();
  };
  const handleMouseUpSearch = (event) => {
    event.preventDefault();
  };

  const filteredData = data.filter(
    (item) =>
      (item.firstName &&
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.phoneNumber && String(item.phoneNumber).includes(searchQuery)) ||
      (item.pcode &&
        item.pcode.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content">
      <div className="patient-body">
        <Grid container justifyContent="flex-end">
          <Grid marginRight="auto">
            <div className="patient-header">Patients</div>
          </Grid>

          <Grid>
            <TextField
              id="patient-search"
              label=""
              color="#6e4de7"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        // onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownSearch}
                        onMouseUp={handleMouseUpSearch}
                        edge="start"
                      >
                        <SearchRoundedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    "& fieldset": { border: "none" },
                  },
                },
              }}
              variant="outlined"
            />
          </Grid>

          <Grid>
            <button className="filter-button">
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <TuneRoundedIcon sx={{ fontSize: 24 }} />
                Filter
              </Stack>
            </button>
          </Grid>

          <Grid>
            <button className="add-button" onClick={openForm}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <AddRoundedIcon sx={{ fontSize: 24 }} />
                Add Patient
              </Stack>
              {/* + Add Patient */}
            </button>
          </Grid>
        </Grid>

        <div className="patient-container">
          <PatientList patients={filteredData} />
        </div>

        {isFormOpen && <PatientForm closeForm={closeForm}/>}
      </div>
    </div>
  );
};

export default Patients;
