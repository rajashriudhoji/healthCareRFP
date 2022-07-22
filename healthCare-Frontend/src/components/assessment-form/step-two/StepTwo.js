import { useContext } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import useAlert from "../../../custom-hooks/useAlert";
import {
  ATLEAST_ONE_SELECT,
  NEXT_BUTTON_TEXT,
  PREVIOUS_BUTTON_TEXT,
  REQUIRED_ERROR_MSG,
  UPDATE_BUTTON_TEXT,
  UPDATE_PROGRESS_BUTTON_TEXT,
} from "../../../utils/constants";
import { getConvertedDate } from "../../../utils/functions";
import Stepper from "../../stepper/Stepper";
import Header from "../form-header/Header";
import "./steptwo.css";

const StepTwo = () => {
  const navigate = useNavigate();
  const {
    data,
    setData,
    step,
    isReadOnly,
    handleUpdatePatient,
    patientId,
    isEdit,
  } = useContext(DataContext);

  const {
    successMsg,
    setSuccessMsg,
    errorMsg,
    setErrorMsg,
    isUpdated,
    setIsUpdated,
    inProgress,
    setInProgress,
  } = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateOfService: data?.patientVisit?.dateOfService
        ? getConvertedDate(data?.patientVisit?.dateOfService)
        : null,
      pulseRate: data?.patientVisit?.vitalSigns?.temperature?.pulseRate,
      respirationRate:
        data?.patientVisit?.vitalSigns?.temperature?.respirationRate,
      bloodPressure: data?.patientVisit?.vitalSigns?.temperature?.bloodPressure,
      weight: data?.patientVisit?.vitalSigns?.temperature?.weight,
      smokeStatus: data?.patientVisit?.smokeStatus === true ? "true" : "false",
    },
  });

  const showNextButton = isUpdated || (!isReadOnly && !isEdit) || isReadOnly;

  const handleFormSubmit = async (values) => {
    const { dateOfService, smokeStatus, ...rest } = values;
    const dataToUpdate = {
      patientVisit: {
        dateOfService,
        smokeStatus: smokeStatus === "true" ? true : false,
        vitalSigns: {
          temperature: {
            ...rest,
          },
        },
      },
    };
    setData((prev) => ({
      ...prev,
      ...dataToUpdate,
    }));
    if (showNextButton) {
      setSuccessMsg("");
      setErrorMsg("");
      navigate("/step-three");
    } else {
      try {
        setInProgress(true);
        const response = await handleUpdatePatient(patientId, {
          ...data,
          ...dataToUpdate,
        });
        if (response === true) {
          setIsUpdated(true);
          setSuccessMsg("Data is successfully updated.");
          setErrorMsg("");
        } else {
          setErrorMsg("Error while updating data. Please try again.");
          setSuccessMsg("");
        }
      } catch (error) {
      } finally {
        setInProgress(false);
      }
    }
  };

  const handlePreviousClick = () => {
    navigate("/step-one");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-two">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <h4 className="form-heading">Postpartum Visit Check</h4>
          <Form.Group className="mb-3" controlId="dateOfService">
            <Form.Label>Date of Service</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date of service"
              {...register("dateOfService", {
                required: true,
              })}
              disabled={isReadOnly}
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
                  disabled={isReadOnly}
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
                  disabled={isReadOnly}
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
                  disabled={isReadOnly}
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
                  disabled={isReadOnly}
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
              <fieldset disabled={isReadOnly}>
                <Form.Group
                  className="mb-3 smoke-status"
                  controlId="smokeStatus"
                >
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
              </fieldset>
            </Col>
          </Row>
          <Form.Group className="mb-3 buttons">
            <Button type="button" onClick={handlePreviousClick}>
              {PREVIOUS_BUTTON_TEXT}
            </Button>
            <Button type="submit" className="btn">
              {showNextButton
                ? NEXT_BUTTON_TEXT
                : inProgress
                ? UPDATE_PROGRESS_BUTTON_TEXT
                : UPDATE_BUTTON_TEXT}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default StepTwo;
