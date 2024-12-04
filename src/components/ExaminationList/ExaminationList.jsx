import './ExaminationList.css'

import React, { useState } from 'react';


const ExaminationList = ( {examinations} ) => {
    const [selectedExamination, setselectedExamination] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (examination) => {
        setselectedExamination(examination);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setselectedExamination(null);
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
                    <th>Examination ID</th>
                    <th>Date</th>
                    <th>Next Date</th>
                    <th>Diagnose</th>
                    <th>Doctor Name</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {examinations.map((examination) => (
                    <tr key={examination.id} onClick={() => openModal(examination)} style={{ cursor: "pointer" }}>
                        <td>{examination.id}</td>
                        <td>{examination.date}</td>
                        <td>{examination.nextDate}</td>
                        <td>{examination.diagnose}</td>
                        <td>{examination.doctorName}</td>
                        <td>{formatCurrency(examination.fee)}</td>
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
                    <h2>{selectedExamination.patientName} ({selectedExamination.patientCode})</h2>
                    <p><strong>Date:</strong> {selectedExamination.date}</p>
                    <p><strong>Next Date:</strong> {selectedExamination.nextDate}</p>
                    <p><strong>Diagnose:</strong> {selectedExamination.diagnose}</p>
                    <p><strong>Doctor Name:</strong> {selectedExamination.doctorName}</p>
                    <p><strong>Medication:</strong> {selectedExamination.medicationName}</p>
                    <p><strong>Fee:</strong> {formatCurrency(selectedExamination.fee)}</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
        </div>
    )
}
export default ExaminationList;