import axios from "axios";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { BASE_API_URL } from "../../utils/constants";
import "./patientslist.css";

const PatientsList = ({ filteredData }) => {
  const navigate = useNavigate();
  const { setData, setIsReadOnly, setStep } = useContext(DataContext);

  const handleViewDetailsClick = async (patient_id) => {
    try {
      const { data: details } = await axios.get(
        `${BASE_API_URL}/v1/patient/${patient_id}`
      );
      setData(details);
      setStep(1);
      setIsReadOnly(true);
      navigate("/step-one");
    } catch (error) {}
  };

  return (
    <div className="patients-list">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Mother Name</th>
            <th>Baby Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
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
                <td>
                  <AiOutlineEye
                    color="#0d6efd"
                    size={30}
                    className="view-icon"
                    onClick={() => handleViewDetailsClick(patient_id)}
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
