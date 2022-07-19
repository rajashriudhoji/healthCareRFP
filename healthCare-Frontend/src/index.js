import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepEnd from "./components/assessment-form/step-end/StepEnd";
import StepFour from "./components/assessment-form/step-four/StepFour";
import StepOne from "./components/assessment-form/step-one/StepOne";
import StepSix from "./components/assessment-form/step-six/StepSix";
import StepThree from "./components/assessment-form/step-three/StepThree";
import StepTwo from "./components/assessment-form/step-two/StepTwo";
import StepFive from "./components/assessment-form/stepFive/StepFive";
import Home from "./components/home/Home";
import DataContext from "./context/DataContext";
import "./index.css";
import { initialState } from "./utils/data";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  const [data, setData] = useState(initialState);
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
        <Route path="/step-four" element={<StepFour />} />
        <Route path="/step-end" element={<StepEnd />} />
        <Route path="/step-five" element={<StepFive />} />
        <Route path="/step-six" element={<StepSix />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </DataContext.Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
