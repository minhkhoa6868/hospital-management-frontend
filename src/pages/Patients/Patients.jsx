import './Patients.css';
import '../../components/PatientList/PatientList';
import PatientList from '../../components/PatientList/PatientList';
import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import { TextField, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid2'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';


const Patients = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [data, setData] = useState([
        { id: "IP000000001", name: "Jaydon Vetrovs", dob:"23.09.2000", gender:"M", phoneNumber:"0238923489", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "OP000000001", name: "Jakob Gouse", dob:"30.01.1991",  gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "IP000000002", name: "Kaylynn Geidt", dob:"01.09.1961", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "IP000000003", name: "Marilyn Culhane", dob:"09.10.2002", gender:"F", phoneNumber:"0983941898", checkIn: "18.03.2024", diagnose: "Angioplasty"},
        { id: "OP000000002", name: "Jaydon Vetrovs", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "OP000000003", name: "Jakob Gouse", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "OP000000004", name: "Kaylynn Geidt", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "IP000000004", name: "Marilyn Culhane", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty"},
        { id: "OP000000005", name: "Jaydon Vetrovs", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "IP000000005", name: "Jakob Gouse", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "OP000000006", name: "Kaylynn Geidt", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "OP000000007", name: "Marilyn Culhane", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty"},
        { id: "OP000000008", name: "Jaydon Vetrovs", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "IP000000006", name: "Jakob Gouse", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "OP000000009", name: "Kaylynn Geidt", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "IP000000007", name: "Marilyn Culhane", dob:"30.01.2000", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty"},
        
    ]);

    const handleMouseDownSearch = (event) => {
        event.preventDefault();
      };
    const handleMouseUpSearch = (event) => {
        event.preventDefault();
    };

    const filteredData = data.filter(
        item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Search in 'name'
          String(item.phoneNumber).includes(searchQuery) || // Search in phone number
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) // Search ID
      );

    return(
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
                    onChange={e => setSearchQuery(e.target.value)}

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
                        borderRadius: '20px',
                        backgroundColor: '#fff',
                        "& fieldset": { border: 'none' },
                        },
                    },
                    }}
                    variant="outlined"
                    />
                </Grid>

                <Grid>
                    <button className='filter-button'>
                        <Stack
                        alignItems="center"
                        direction="row"
                        gap={1}
                        backgroundColor="transparent"
                        >
                            <TuneRoundedIcon sx={{ fontSize: 24 }}/>
                            Filter
                        </Stack>
                    </button>
                </Grid>

                <Grid>
                    <button className='add-button'>
                        <Stack
                        alignItems="center"
                        direction="row"
                        gap={1}
                        backgroundColor="transparent"
                        >
                            <AddRoundedIcon sx={{ fontSize: 24 }}/>
                            Add Patient
                        </Stack>
                        {/* + Add Patient */}
                    </button>
                </Grid>
            </Grid>
            

            
            <div className='patient-container'>
                <PatientList patients={filteredData}/>
            </div>
            
        </div>  
        </div>
    );
}

export default Patients;