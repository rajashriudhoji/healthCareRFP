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

const StepFive = () => {
  const navigate = useNavigate();
  const { setData, incrementStep, decrementStep, step } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleFormSubmit = (values) => {
    console.log(values);
    const {
      depressionScreening,
      contraceptionMethod,
      peripheralBloodGlucose,
      doctorAppointment,
      carSeatSafety,
      immunizationSchedule,
      breastFeeding,
      familyPlanning,
      infantSafety,
      details,
      checkups,
    } = values;
    setData((prev) => ({
      ...prev,
      patientEducationalMaterial: {
        depressionScreening: {
          educationProvided: depressionScreening.includes("educationProvided"),
          referred: depressionScreening.includes("referred"),
          declined: depressionScreening.includes("declined"),
        },
        contraceptionMethod: {
          educationProvided: contraceptionMethod.includes("educationProvided"),
          referred: contraceptionMethod.includes("referred"),
          declined: contraceptionMethod.includes("declined"),
        },
        peripheralBloodGlucose: {
          educationProvided:
            peripheralBloodGlucose.includes("educationProvided"),
          referred: peripheralBloodGlucose.includes("referred"),
          declined: peripheralBloodGlucose.includes("declined"),
        },
        doctorAppointment: {
          educationProvided: doctorAppointment.includes("educationProvided"),
          referred: doctorAppointment.includes("referred"),
          declined: doctorAppointment.includes("declined"),
        },
        carSeatSafety: {
          educationProvided: carSeatSafety.includes("educationProvided"),
          referred: carSeatSafety.includes("referred"),
          declined: carSeatSafety.includes("declined"),
        },
        immunizationSchedule: {
          educationProvided: immunizationSchedule.includes("educationProvided"),
          referred: immunizationSchedule.includes("referred"),

          declined: immunizationSchedule.includes("declined"),
        },
        breastFeeding: {
          educationProvided: breastFeeding.includes("educationProvided"),
          referred: breastFeeding.includes("referred"),
          declined: breastFeeding.includes("declined"),
        },
        infantSafety: {
          educationProvided: infantSafety.includes("educationProvided"),
          referred: infantSafety.includes("referred"),
          declined: infantSafety.includes("declined"),
        },
        familyPlanning: {
          educationProvided: familyPlanning.includes("educationProvided"),
          referred: familyPlanning.includes("referred"),
          declined: familyPlanning.includes("declined"),
        },
        checkups: {
          educationProvided: checkups.includes("educationProvided"),
          referred: checkups.includes("referred"),
          declined: checkups.includes("declined"),
        },
        details: details,
      },
    }));
    incrementStep();
    navigate("/step-six");
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-four");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-one">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h3>Educational Discussions/Material(s) Provided</h3>
          <Row>
            <Col>
              <Form.Label>Postpartum depression screening</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("depressionScreening", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("depressionScreening", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("depressionScreening", { required: true })}
                />
              </Form.Group>
            </Col>
            {errors.depressionScreening && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Contraception Methods</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("contraceptionMethod", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("contraceptionMethod", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("contraceptionMethod", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.contraceptionMethod && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Peripheral Blood Glucose</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("peripheralBloodGlucose", {
                    required: true,
                  })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("peripheralBloodGlucose", {
                    required: true,
                  })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("peripheralBloodGlucose", {
                    required: true,
                  })}
                />
              </Form.Group>
            </Col>

            {errors.peripheralBloodGlucose && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Doctor Appointments</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("doctorAppointment", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("doctorAppointment", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("doctorAppointment", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.doctorAppointment && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Car Seat Safety</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("carSeatSafety", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("carSeatSafety", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("carSeatSafety", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.carSeatSafety && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Immunization Schedule</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("immunizationSchedule", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("immunizationSchedule", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("immunizationSchedule", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.immunizationSchedule && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Breast Feeding</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("breastFeeding", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("breastFeeding", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("breastFeeding", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.breastFeeding && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Infant Safety</Form.Label>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("infantSafety", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("infantSafety", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("infantSafety", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.infantSafety && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Family Planning</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("familyPlanning", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("familyPlanning", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
              >
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("familyPlanning", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.familyPlanning && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Row>
            <Col>
              <Form.Label>Checkups</Form.Label>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Education Provided"
                  value="educationProvided"
                  {...register("checkups", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Referred"
                  value="referred"
                  {...register("checkups", { required: true })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender">
                <Form.Check
                  type="checkbox"
                  label="Declined"
                  value="declined"
                  {...register("checkups", { required: true })}
                />
              </Form.Group>
            </Col>

            {errors.checkups && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Comments:</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="address"
              {...register("details", {
                required: true,
              })}
            />
            {errors.details && <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>}
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

export default StepFive;
