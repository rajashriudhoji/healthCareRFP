import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepEnd from "./components/assessment-form/step-end/StepEnd";
import StepOne from "./components/assessment-form/step-one/StepOne";
import StepThree from "./components/assessment-form/step-three/StepThree";
import StepTwo from "./components/assessment-form/step-two/StepTwo";
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
  const [data, setData] = useState({
    patient: {
      motherName: "",
      babyName: "",
      babyDOB: "",
      address: "",
      email: "",
      phone: "",
      babyGender: "",
    },
    p_visit: {
      dateOfService: "",
      vitalSigns: {
        temperature: {
          pulseRate: "",
          respirationRate: "",
          bloodPressure: "",
          weight: "",
        },
      },
    },
    p_clinical_Assess: {
      smokeStatus: false,
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

  const incrementStep = () => {
    setStep((step) => step + 1);
  };

  const decrementStep = () => {
    setStep((step) => step - 1);
  };

  const handleFinish = () => {
    console.log("Step", step);
  };

  console.log({ data });

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        incrementStep,
        decrementStep,
        handleFinish,
        step,
        setStep,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-one" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/step-end" element={<StepEnd />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </DataContext.Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
