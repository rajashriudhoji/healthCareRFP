import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import Header from "../header/Header";
import "./home.css";

const Home = () => {
  const { setStep } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="home-page">
        <Button
          variant="outline-primary"
          className="btn"
          onClick={() => {
            setStep(1);
            navigate("/step-one");
          }}
        >
          Add New
        </Button>
        <Button variant="outline-secondary" className="btn">
          View Details
        </Button>
      </div>
    </>
  );
};

export default Home;
