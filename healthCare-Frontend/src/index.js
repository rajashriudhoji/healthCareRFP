import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StepOne from "./components/assessment-form/step-one/StepOne";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/step-one" element={<StepOne />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
