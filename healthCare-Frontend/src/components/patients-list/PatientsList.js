import axios from "axios";
import { useContext, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { BASE_API_URL } from "../../utils/constants";
import "./patientslist.css";

const PatientsList = ({ filteredData, setFilteredData }) => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { setData, setIsReadOnly, setStep, setIsEdit, isEdit } =
    useContext(DataContext);

  const handleViewDetailsClick = async (patient_id) => {
    try {
      const { data: details } = await axios.get(
        `${BASE_API_URL}/v1/patient/${patient_id}`
      );
      // const { data: details } = await axios.get(`/patient.json`);
      setData(details);
      setStep(1);
      setIsReadOnly(true);
      navigate("/step-one");
    } catch (error) {}
  };

  const handleDeleteClick = async (patient_id) => {
    try {
      await axios.delete(`${BASE_API_URL}/v1/patient/${patient_id}`);
      setSuccessMsg("Data is successfully deleted.");
      setFilteredData(
        filteredData.filter((patient) => patient.patient_id !== patient_id)
      );
      setErrorMsg("");
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    } catch (error) {
      setSuccessMsg("");
      setErrorMsg("Error while deleting data. Please try again.");
    }
  };

  const handleEditClick = async (patient_id) => {
    try {
      const { data: details } = await axios.get(
        `${BASE_API_URL}/v1/patient/${patient_id}`
      );
      // const { data: details } = await axios.get(`/patient.json`);
      setData(details);
      setStep(1);
      setIsReadOnly(false);
      setIsEdit(true);
      navigate("/step-one");
    } catch (error) {}
  };

  return (
    <div className="patients-list">
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Mother Name</th>
            <th>Baby Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((patient, index) => {
            const { motherName, babyName, email, phone, patient_id } =
              patient || {};

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{motherName}</td>
                <td>{babyName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className="icon">
                  <AiOutlineEye
                    size={30}
                    className="icon"
                    onClick={() => handleViewDetailsClick(patient_id)}
                  />
                </td>
                <td className="icon">
                  <AiOutlineEdit
                    size={30}
                    className="icon"
                    onClick={() => handleEditClick(patient_id)}
                  />
                </td>
                <td className="icon">
                  <AiOutlineDelete
                    size={30}
                    className="icon"
                    onClick={() => handleDeleteClick(patient_id)}
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
