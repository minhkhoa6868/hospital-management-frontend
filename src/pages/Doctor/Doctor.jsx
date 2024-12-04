import { useState, useEffect } from "react";

import DoctorList from "../../components/DoctorList/DoctorList";
import Grid from "@mui/material/Grid2";

import './Doctor.css';

const Doctor = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:8080/employee/all/doctor");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const doctors = await response.json();
        setData(doctors); // Set data from backend
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content">
        <div className="doctor-body">
            <Grid container justifyContent="flex-end">
                <Grid marginRight="auto">
                    <div className="doctor-header">Doctors</div>
                </Grid>
            </Grid>
            <div className="doctor-container">
                <DoctorList doctors={data} />
            </div>
        </div>
    </div>
  );
};

export default Doctor;
