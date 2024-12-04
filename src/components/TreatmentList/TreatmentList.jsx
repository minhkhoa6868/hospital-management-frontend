import './TreatmentList.css'

import React, { useState } from 'react';

const TreatmentList = ( {treatments} ) => {
    const [selectedTreatment, setselectedTreatment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (treatment) => {
        setselectedTreatment(treatment);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setselectedTreatment(null);
        setIsModalOpen(false);
    };

    const formatCurrency = (amount) => {
        const formattedAmount = new Intl.NumberFormat('vi-VN').format(amount);
        return `${formattedAmount} VND`;
    };

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Treatment ID</th>
                    <th>Diagnosis</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Doctor Code</th>
                    <th>Doctor Name</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {treatments.map((treatment) => (
                    <tr key={treatment.id} onClick={() => openModal(treatment)} style={{ cursor: "pointer" }}>
                        <td>{treatment.id}</td>
                        <td>{treatment.informationDiagnosis}</td>
                        <td>{treatment.startDate}</td>
                        <td>{treatment.endDate}</td>
                        <td>{treatment.doctorCode}</td>
                        <td>{treatment.doctorName}</td>
                        <td>{formatCurrency(treatment.informationFee)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {isModalOpen && (
            <div>
                {/* Overlay for dimmed background */}
                <div className='dim-bg-overlay'></div>
        
                {/* Modal */}
                <div className='modalContentStyles'>
                    <h2>{selectedTreatment.patientName} ({selectedTreatment.patientCode})</h2>
                    <p><strong>Diagnosis:</strong> {selectedTreatment.informationDiagnosis}</p>
                    <p><strong>Result:</strong> {selectedTreatment.result}</p>
                    <p><strong>Start Date:</strong> {selectedTreatment.startDate}</p>
                    <p><strong>End Date:</strong> {selectedTreatment.endDate}</p>
                    <p><strong>Treatment Doctor:</strong> {selectedTreatment.doctorName}</p>
                    <p><strong>Admission Date:</strong> {selectedTreatment.informationDateOfAdmission}</p>
                    <p><strong>Discharged Date:</strong> {selectedTreatment.informationDateOfDischarge}</p>
                    <p><strong>Sickroom:</strong> {selectedTreatment.informationSickroom}</p>
                    <p><strong>Take Care By Nurse:</strong> {selectedTreatment.takeCareNurseName}</p>
                    <p><strong>Medication:</strong> {selectedTreatment.medicationName}</p>
                    <p><strong>Fee:</strong> {formatCurrency(selectedTreatment.informationFee)}</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
        </div>
    )
}
export default TreatmentList;