import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import StepOne from "./components/assessment-form/step-one/StepOne";
import StepThree from "./components/assessment-form/step-three/StepThree";
import Home from "./components/home/Home";
import DataContext from "./context/DataContext";
import "./index.css";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    patient: {
      patientId: "",
      motherName: "",
      babyName: "",
      babyDOB: "",
      address: "",
      email: "",
      phone: "",
      babyGender: "",
    },
    p_breastFeeding: {
      patientId: "",
      isBreastfeeding: true,
      feedLength: 15,
      feedFrequency: 5,
      supplimentFormula: true,
      feedingComfort: true,
      isNippleCracked: true,
    },
    p_safeSpacing: {
      patientId: "",
      birthControl: {
        isUsed: true,
        details: "",
      },
      birthControlAssess: {
        isAssessDone: true,
        details: "",
      },
    },
  });

  const [step, setStep] = useState(1);

  const getURL = (step) => {
    switch (step) {
      case 1:
        navigate("/step-one");
        break;

      default:
        setStep(1);
        navigate("/step-one");
        break;
    }
  };

  const handleNextClick = () => {
    setStep(step + 1);
    getURL(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
    getURL(step - 1);
  };

  const handleFinish = () => {
    console.log("Step", step);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        handleNextClick,
        handlePreviousClick,
        handleFinish,
        step,
        setStep,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-one" element={<StepOne />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </DataContext.Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
