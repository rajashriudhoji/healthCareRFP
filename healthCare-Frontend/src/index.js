import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepOne from "./components/assessment-form/step-one/StepOne";
import Home from "./components/home/Home";
import DataContext from "./context/DataContext";
import "./index.css";

const AppRoutes = () => {
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
  });

  return (
    <BrowserRouter>
      <DataContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step-one" element={<StepOne />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
