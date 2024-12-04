import { useState, useEffect } from "react";

import ExaminationList from "../../components/ExaminationList/ExaminationList";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import "./PatientExamination.css";
import { useNavigate, useParams } from "react-router-dom";

const PatientExamination = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchPatientExaminations = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/patient/${code}/examination`
        );
        if (response.status === 404) {
          throw new Error("Examination not found.");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const patientTreatments = await response.json();
        setData(patientTreatments); // Set data from backend
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    fetchPatientExaminations();
  }, [code]);

  const backToPatient = () => {
    navigate("/patients");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content">
      <div className="examination-body">
        {!error && (
          <>
            <Grid container justifyContent="flex-end">
              <Grid marginRight="auto">
                <div className="examination-header">
                  Examination of patient {code}
                </div>
              </Grid>
              <Grid>
                <button className="back-button" onClick={backToPatient}>
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
            <div className="examination-container">
              <ExaminationList examinations={data} />
            </div>
          </>
        )}
        {error && (
          <>
            <Grid container justifyContent="flex-end">
              <Grid marginRight="auto">
                <div className="examination-header">
                  {error.includes("Examination not found") && (
                    <p>No examination available for patient {code}.</p>
                  )}
                </div>
              </Grid>
              <Grid>
                <button className="back-button" onClick={backToPatient}>
                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={1}
                    backgroundColor="transparent"
                  >
                    Back to patients
                  </Stack>
                </button>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default PatientExamination;
