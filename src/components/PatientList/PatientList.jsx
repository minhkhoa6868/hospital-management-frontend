import './PatientList.css'

import React, { useState } from 'react';

const StatusCheck = (id) => {
    if (!id || typeof id !== 'string') {
        return 'Invalid ID'; // Handle cases where id is not valid
    }
    const firstChar = id.charAt(0).toUpperCase();
    return firstChar === 'O' ? 'Outpatient' : firstChar === 'I' ? 'Inpatient' : 'Unknown Type';
};

const PatientList = ( {patients} ) => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (person) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

        const closeModal = () => {
        setSelectedPerson(null);
        setIsModalOpen(false);
    };

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Full Name</th>
                    <th>Dob</th>
                    <th>Sex</th>
                    <th>Phone Number</th>
                    <th>Date Checked In</th>
                    <th>Diagnosis</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient) => (
                    <tr key={patient.id} onClick={() => openModal(patient)} style={{ cursor: "pointer" }}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.dob}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.phoneNumber}</td>
                        <td>{patient.checkIn}</td>
                        <td>{patient.diagnose}</td>
                        <td>{StatusCheck(patient.id)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {isModalOpen && (
            <div>
                {/* Overlay for dimmed background */}
                <div className='overlay-styles'></div>
        
                {/* Modal */}
                <div className='modalContentStyles'>
                    <h2>{selectedPerson.name}</h2>
                    <p><strong>ID:</strong> {selectedPerson.id}</p>
                    <p><strong>PhoneNumber:</strong> {selectedPerson.phoneNumber}</p>
                    <p><strong>Type:</strong> {StatusCheck(selectedPerson.id)}</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
        </div>
    )
}
export default PatientList;