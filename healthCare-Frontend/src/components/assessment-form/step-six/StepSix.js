import axios from "axios";
import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import {
  ATLEAST_ONE_SELECT,
  PREVIOUS_BUTTON_TEXT,
  REQUIRED_ERROR_MSG,
  SUBMIT,
} from "../../../utils/constants";
import Stepper from "../../stepper/Stepper";
import Header from "../form-header/Header";
import "../step-one/stepone.css";

const StepSix = () => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { setData, incrementStep, decrementStep, step, data } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      appointmentDate:
        data?.patientFollowUpAppointments?.pFollowupAppointment
          ?.appointmentDate,
      childFollowupAppointment_appointmentDate:
        data?.patientFollowUpAppointments?.childFollowupAppointment
          ?.appointmentDate,
      childFollowupAppointment_healthCare:
        data?.patientFollowUpAppointments?.childFollowupAppointment?.healthCare,
      childFollowupAppointment_isAppointmentTaken:
        data?.patientFollowUpAppointments?.childFollowupAppointment
          ?.isAppointmentTaken,
      healthCare:
        data?.patientFollowUpAppointments?.pFollowupAppointment?.healthCare,
      isAppointmentTaken:
        data?.patientFollowUpAppointments?.pFollowupAppointment
          ?.isAppointmentTaken,
    },
  });

  const handleFormSubmit = async (values) => {
    console.log(values);
    const {
      appointmentDate,
      childFollowupAppointment_appointmentDate,
      childFollowupAppointment_healthCare,
      childFollowupAppointment_isAppointmentTaken,
      healthCare,
      isAppointmentTaken,
    } = values;
    setData((prev) => ({
      ...prev,
      patientFollowUpAppointments: {
        pFollowupAppointment: {
          isAppointmentTaken: isAppointmentTaken === "Yes" ? true : false,
          appointmentDate: appointmentDate,
          healthCare: healthCare,
        },
        childFollowupAppointment: {
          isAppointmentTaken:
            childFollowupAppointment_isAppointmentTaken === "Yes"
              ? true
              : false,
          appointmentDate: childFollowupAppointment_appointmentDate,
          healthCare: childFollowupAppointment_healthCare,
        },
      },
    }));
    try {
      await axios.post(
        "http://4597-2401-4900-362b-7c62-980b-a0a8-fc0d-3f0f.ngrok.io/api/v1/patient",
        { ...data }
      );
      setSuccessMsg("Data is successfully saved.");
      setErrorMsg("");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      setSuccessMsg("");
      setErrorMsg("Error while saving data. Please try again.");
    }
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-five");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-three">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          {successMsg && <p className="successMsg">{successMsg}</p>}
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <h4 className="form-heading">Follow-Up Appointments</h4>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>Follow-Up Appointment Made</Form.Label>
                </Col>
                <Col>
                  <Form.Group
                    className="baby-gender"
                    controlId="isAppointmentTaken"
                  >
                    <Form.Check
                      type="radio"
                      label="Yes"
                      value="true"
                      {...register("isAppointmentTaken", {
                        required: true,
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="false"
                      {...register("isAppointmentTaken", {
                        required: true,
                      })}
                    />
                    {errors.isAppointmentTaken && (
                      <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group controlId="appointmentDate">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter your appointment's date"
                  {...register("appointmentDate", {
                    required: true,
                  })}
                />
                {errors.appointmentDate && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="healthCare">
            <Form.Label>Health Care Provider:</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              className="address"
              {...register("healthCare", {
                required: true,
              })}
            />
            {errors.healthCare && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>Well-Child Visit Appointment Made</Form.Label>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3 baby-gender"
                    controlId="childFollowupAppointment"
                  >
                    <Form.Check
                      type="radio"
                      label="Yes"
                      value="Yes"
                      {...register(
                        "childFollowupAppointment_isAppointmentTaken",
                        {
                          required: true,
                        }
                      )}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="No"
                      {...register(
                        "childFollowupAppointment_isAppointmentTaken",
                        {
                          required: true,
                        }
                      )}
                    />
                    {errors.childFollowupAppointment_isAppointmentTaken && (
                      <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="childFollowupAppointment_appointmentDate"
              >
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter your appointment's date"
                  {...register("childFollowupAppointment_appointmentDate", {
                    required: true,
                  })}
                />
                {errors.childFollowupAppointment_appointmentDate && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group
            className="mb-3"
            controlId="childFollowupAppointment_healthCare"
          >
            <Form.Label>Health Care Provider:</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              className="address"
              {...register("childFollowupAppointment_healthCare", {
                required: true,
              })}
            />
            {errors.childFollowupAppointment_healthCare && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3 buttons">
            <Button
              variant="secondary"
              type="button"
              onClick={handlePreviousClick}
            >
              {PREVIOUS_BUTTON_TEXT}
            </Button>
            <Button variant="secondary" type="submit">
              {SUBMIT}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default StepSix;
