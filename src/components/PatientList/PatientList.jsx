import './PatientList.css';

const PatientList = () => {
    const patients = [
        { id: "#A-125011", name: "Jaydon Vetrovs",phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Ventricular"},
        { id: "#A-125012", name: "Jakob Gouse",phoneNumber:"0123456789", checkIn: "20.03.2024", diagnose: "Maze surgery"},
        { id: "#A-125013", name: "Kaylynn Geidt",phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty" },
        { id: "#A-125013", name: "Marilyn Culhane",phoneNumber:"0123456789", checkIn: "18.03.2024", diagnose: "Angioplasty"},
    ];
    return (
        <div className="patient-list">
            <div>
                <div className="header">Patient List</div>
                <div className='subheader'>Information about new patients</div>
            </div>

            <table>
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th>Patient ID</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Date Checked In</th>
                        <th>Diagnosis</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index}>
                            {/* <td><input type="checkbox" /></td> */}
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.phoneNumber}</td>
                            <td>{patient.checkIn}</td>
                            <td>{patient.diagnose}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default PatientList;