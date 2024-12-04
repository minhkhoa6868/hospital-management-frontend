import './PatientOverview.css';
import '../PatientList/PatientList';
import { useState, useEffect } from 'react';
import PatientList from '../PatientList/PatientList';

const PatientOverview = () => {
    const patients = [
        { id: "IP000000001", name: "Jaydon Vetrovs", dob:"23.09.2000", gender:"M", phoneNumber:"0238923489", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "OP000000001", name: "Jakob Gouse", dob:"30.01.1991",  gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "IP000000002", name: "Kaylynn Geidt", dob:"01.09.1961", gender:"F", phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "IP000000003", name: "Marilyn Culhane", dob:"09.10.2002", gender:"F", phoneNumber:"0983941898", checkIn: "18.03.2024", diagnose: "Angioplasty"},
        { id: "OP000000002", name: "Jaydon Vetrovs", dob:"30.01.2000", gender:"M", phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Ventricular"},
    ];

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className="patient-list">
            <div>
                <div className="header">Patient List</div>
                <div className='subheader'>Information about new patients</div>
            </div>

            <PatientList patients={data}/>
        </div>
    )
}
export default PatientOverview;