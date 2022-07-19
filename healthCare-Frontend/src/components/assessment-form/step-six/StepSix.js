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
import "../step-one/stepone.css";

const StepSix = () => {
  const navigate = useNavigate();
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

  const handleFormSubmit = (values) => {
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
    incrementStep();
    navigate("/step-end");
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
              {NEXT_BUTTON_TEXT}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default StepSix;
