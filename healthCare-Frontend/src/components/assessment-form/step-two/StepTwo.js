import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import Stepper from "../../stepper/Stepper";
import {
  ATLEAST_ONE_SELECT,
  NEXT_BUTTON_TEXT,
  PREVIOUS_BUTTON_TEXT,
  REQUIRED_ERROR_MSG,
} from "../../utils/constants";
import Header from "../form-header/Header";
import "./steptwo.css";

const StepTwo = () => {
  const navigate = useNavigate();
  const { data, setData, incrementStep, decrementStep, step } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateOfService: data?.p_visit?.dateOfService,
      pulseRate: data?.p_visit?.vitalSigns?.temperature?.pulseRate,
      respirationRate: data?.p_visit?.vitalSigns?.temperature?.respirationRate,
      bloodPressure: data?.p_visit?.vitalSigns?.temperature?.bloodPressure,
      weight: data?.p_visit?.vitalSigns?.temperature?.weight,
      smokeStatus:
        data?.p_clinical_Assess?.smokeStatus === true ? "true" : "false",
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    const { dateOfService, smokeStatus, ...rest } = values;
    setData((prev) => ({
      ...prev,
      p_visit: {
        dateOfService,
        vitalSigns: {
          temperature: {
            ...rest,
          },
        },
      },
      p_clinical_Assess: {
        smokeStatus: smokeStatus === "true" ? true : false,
      },
    }));
    incrementStep();
    navigate("/step-three");
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-one");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-two">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h4 className="form-heading">Postpartum Visit Check</h4>
          <Form.Group className="mb-3" controlId="dateOfService">
            <Form.Label>Date of Service</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date of service"
              {...register("dateOfService", {
                required: true,
              })}
            />
            {errors.dateOfService && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <div className="vital-signs">Vital Signs:</div>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>Temp</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>P</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your pulse rate"
                  {...register("pulseRate", {
                    required: true,
                  })}
                />
                {errors.pulseRate && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>R</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your respiration rate"
                  {...register("respirationRate", {
                    required: true,
                  })}
                />
                {errors.respirationRate && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>BP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your blood pressure"
                  {...register("bloodPressure", {
                    required: true,
                  })}
                />
                {errors.bloodPressure && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>WT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your weight"
                  {...register("weight", {
                    required: true,
                  })}
                />
                {errors.weight && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateOfService">
                <Form.Label>
                  Did you smoke in the last 3 months of your pregnancy?
                </Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 smoke-status" controlId="smokeStatus">
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  {...register("smokeStatus", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  {...register("smokeStatus", { required: true })}
                />
                {errors.smokeStatus && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
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

export default StepTwo;
