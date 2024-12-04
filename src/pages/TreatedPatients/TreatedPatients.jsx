import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PatientList from "../../components/PatientList/PatientList";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import "./TreatedPatients.css";

const TreatedPatients = () => {
  const { code } = useParams(); // Extract doctor code from the URL
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/employee/${code}/treatment/patient`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [code]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const backToDoctor = () => {
    navigate("/doctor");
  }

  return (
    <div className="content">
      <div className="patient-body">
        <Grid container justifyContent="flex-end">
          <Grid marginRight="auto">
            <div className="patient-header">Treated Patients</div>
          </Grid>
          <Grid>
            <button className="back-button" onClick={backToDoctor}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                Back
              </Stack>
            </button>
          </Grid>
        </Grid>

        <div className="patient-container">
          <PatientList patients={patients} />
        </div>
      </div>
    </div>
  );
};

export default TreatedPatients;
