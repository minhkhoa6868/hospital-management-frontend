import { useNavigate } from "react-router-dom";
import "./PatientList.css";

import React, { useState } from "react";

const PatientList = ({ patients }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setIsModalOpen(false);
  };

  const openTreatmentList = (patientCode) => {
    navigate(`/patients/${patientCode}/treatment`);
  };

  const openExaminationList = (patientCode) => {
    navigate(`/patients/${patientCode}/examination`);
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
            <th>Medical Care</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.pcode}
              onClick={() => openModal(patient)}
              style={{ cursor: "pointer" }}
            >
              <td>{patient.pcode}</td>
              <td>{patient.lastName + " " + patient.firstName}</td>
              <td>{patient.dob}</td>
              <td>{patient.gender}</td>
              <td>{patient.phoneNumber}</td>
              <td>
                <button
                  onClick={() => {
                    patient.patientType == "Inpatient"
                      ? openTreatmentList(patient.pcode)
                      : openExaminationList(patient.pcode);
                  }}
                >
                  {patient.patientType == "Inpatient"
                    ? "Treatment"
                    : "Examination"}
                </button>
              </td>
              <td>{patient.patientType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div>
          {/* Overlay for dimmed background */}
          <div className="overlay-styles"></div>

          {/* Modal */}
          <div className="modalContentStyles">
            <h2>{selectedPerson.lastName + " " + selectedPerson.firstName}</h2>
            <p>
              <strong>ID:</strong> {selectedPerson.pcode}
            </p>
            <p>
              <strong>PhoneNumber:</strong> {selectedPerson.phoneNumber}
            </p>
            <p>
              <strong>Type:</strong> {selectedPerson.patientType}
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PatientList;
