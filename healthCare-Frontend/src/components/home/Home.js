import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { BASE_API_URL } from "../../utils/constants";
import { initialState } from "../../utils/initialstate";
import Header from "../header/Header";
import PatientsList from "../patients-list/PatientsList";
import "./home.css";

const Home = () => {
  const { setStep, setData, setIsReadOnly } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const { data: details } = await axios.get(`${BASE_API_URL}/v1/patient`);

        setUserData(details);
        setFilteredData(details);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  const handleOnChange = (event) => {
    const text = event.target.value.trim();
    setSearchText(text);
    if (text !== "") {
      setFilteredData(
        userData.filter(
          (patient) =>
            patient?.motherName.toLowerCase().indexOf(text.toLowerCase()) >
              -1 ||
            patient?.phone.toLowerCase().indexOf(text.toLowerCase()) > -1
        )
      );
    } else {
      setFilteredData(userData);
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
            variant="primary"
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
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <PatientsList filteredData={filteredData} />
        )}
      </div>
    </>
  );
};

export default Home;
