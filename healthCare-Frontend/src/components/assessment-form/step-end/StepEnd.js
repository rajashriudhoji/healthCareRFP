import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import Stepper from "../../stepper/Stepper";
import { NEXT_BUTTON_TEXT, PREVIOUS_BUTTON_TEXT } from "../../utils/constants";
import Header from "../form-header/Header";
import "./stepend.css";

const StepEnd = () => {
  const navigate = useNavigate();
  const { data, setData, incrementStep, decrementStep, setStep, step } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (values) => {
    console.log(values);
    setData((prev) => ({
      ...prev,
      patient: {
        ...values,
      },
    }));
    setStep(1);
    navigate("/step-one");
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-three");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-end">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group className="mb-3 buttons">
            <Button
              variant="secondary"
              type="button"
              onClick={handlePreviousClick}
            >
              {PREVIOUS_BUTTON_TEXT}
            </Button>
            <Button variant="secondary" type="submit">
              {NEXT_BUTTON_TEXT}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default StepEnd;
