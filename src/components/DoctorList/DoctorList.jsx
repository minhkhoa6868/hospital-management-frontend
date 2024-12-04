import { useState, useEffect } from "react";

import './DoctorList.css'
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctors }) => {
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

  const openPatientList = (doctorCode) => {
    navigate(`/doctor/${doctorCode}/treatment/patient`);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Full Name</th>
            <th>Sex</th>
            <th>Phone Number</th>
            <th>Employee Type</th>
            <th>Work At</th>
            <th>Patients</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr
              key={doctor.ecode}
              onClick={() => openModal(doctor)}
              style={{ cursor: "pointer" }}
            >
              <td>{doctor.ecode}</td>
              <td>{doctor.lastName + " " + doctor.firstName}</td>
              <td>{doctor.gender}</td>
              <td>{doctor.phoneNumbers.join(", ")}</td>
              <td>{doctor.employeeType}</td>
              <td>{doctor.deptTitle}</td>
              <td>
                <button onClick={() => openPatientList(doctor.ecode)}>
                    Patient
                </button>
              </td>
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
              <strong>ID:</strong> {selectedPerson.ecode}
            </p>
            <p>
                <strong>Sex:</strong> {selectedPerson.gender}
            </p>
            <p>
                <strong>Date of birth:</strong> {selectedPerson.dob}
            </p>
            <p>
                <strong>Address:</strong> {selectedPerson.address}
            </p>
            <p>
                <strong>Start date:</strong> {selectedPerson.startDate}
            </p>
            <p>
                <strong>Speciality name:</strong> {selectedPerson.speName}
            </p>
            <p>
                <strong>Speciality degree's year:</strong> {selectedPerson.speDegreeYear}
            </p>
            <p>
              <strong>PhoneNumber:</strong>{" "}
              {selectedPerson.phoneNumbers.join(", ")}
            </p>
            <p>
              <strong>Type:</strong> {selectedPerson.employeeType}
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
