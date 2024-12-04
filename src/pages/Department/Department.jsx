import { useState, useEffect } from "react";

import DepartmentList from "../../components/DepartmentList/DepartmentList";
import Grid from "@mui/material/Grid2";

import './Department.css';

const Department = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch data from the backend
    useEffect(() => {
      const fetchDepartments = async () => {
        try {
          const response = await fetch("http://localhost:8080/department/all");
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
      fetchDepartments();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="content">
          <div className="department-body">
              <Grid container justifyContent="flex-end">
                  <Grid marginRight="auto">
                      <div className="department-header">Department</div>
                  </Grid>
              </Grid>
              <div className="department-container">
                  <DepartmentList departments={data} />
              </div>
          </div>
      </div>
    );  
}

export default Department;