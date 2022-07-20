import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { initialState } from "../../utils/initialstate";
import { data } from "../../utils/mockdata";
import Header from "../header/Header";
import PatientsList from "../patients-list/PatientsList";
import "./home.css";

const Home = () => {
  const { setStep, setData, setIsReadOnly } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const text = event.target.value.trim();
    setSearchText(text);
    if (text !== "") {
      setFilteredData(
        data.filter(
          (patient) =>
            patient?.patientBasicInfo?.motherName
              .toLowerCase()
              .indexOf(text.toLowerCase()) > -1 ||
            patient?.patientBasicInfo?.email
              .toLowerCase()
              .indexOf(text.toLowerCase()) > -1
        )
      );
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <Header />
      <div className="home-page container">
        <div className="header-section">
          <Form className="search-box">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Enter mother name or email to search"
                value={searchText}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form>
          <Button
            variant="outline-primary"
            className="btn"
            onClick={() => {
              setStep(1);
              setIsReadOnly(false);
              setData(initialState);
              navigate("/step-one");
            }}
          >
            Add New
          </Button>
        </div>
        <PatientsList filteredData={filteredData} />
      </div>
    </>
  );
};

export default Home;
