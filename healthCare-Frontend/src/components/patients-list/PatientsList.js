import { useContext, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./patientslist.css";

const PatientsList = ({ filteredData }) => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { setData, setIsReadOnly, setStep } = useContext(DataContext);

  const handleViewDetailsClick = (patient) => {
    setData(patient);
    setStep(1);
    setIsReadOnly(true);
    navigate("/step-one");
  };

  const handleDeleteClick = (patient) => {
    try {
      // delete API;
      setSuccessMsg("Data is successfully deleted.");
      setErrorMsg("");
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    } catch (error) {
      setSuccessMsg("");
      setErrorMsg("Error while deleting data. Please try again.");
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <div className="patients-list">
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Mother Name</th>
            <th>Baby Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((patient, index) => {
            const { motherName, babyName, email, phone } =
              patient?.patientBasicInfo || {};

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{motherName}</td>
                <td>{babyName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <AiOutlineEye
                    color="orange"
                    size={30}
                    className="view-icon"
                    onClick={() => handleViewDetailsClick(patient)}
                  />
                </td>
                <td>
                  <AiOutlineDelete
                    color="orange"
                    size={30}
                    className="view-icon"
                    onClick={() => handleDeleteClick(patient)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientsList;
