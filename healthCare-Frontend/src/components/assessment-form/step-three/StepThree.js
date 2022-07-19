import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import {
  ATLEAST_ONE_SELECT,
  NEXT_BUTTON_TEXT,
  PREVIOUS_BUTTON_TEXT,
  REQUIRED_ERROR_MSG,
} from "../../../utils/constants";
import Stepper from "../../stepper/Stepper";
import Header from "../form-header/Header";
import "../step-one/stepone.css";

const StepThree = () => {
  const navigate = useNavigate();
  const { setData, incrementStep, decrementStep, step, data } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isBreastfeeding:
        data?.patientBreastFeeding?.isBreastfeeding === true ? "true" : "false",
      feedLength: data?.patientBreastFeeding?.feedLength,
      feedFrequency: data?.patientBreastFeeding?.feedFrequency,
      supplimentFormula:
        data?.patientBreastFeeding?.supplimentFormula === true
          ? "true"
          : "false",
      feedingComfort:
        data?.patientBreastFeeding?.feedingComfort === true ? "true" : "false",
      isNippleCracked:
        data?.patientBreastFeeding?.isNippleCracked === true ? "true" : "false",
      birthControl_isUsed:
        data?.patientSafeSpacing?.birthControl?.isUsed === true
          ? "true"
          : "false",
      birthControl_details: data?.patientSafeSpacing?.birthControl?.details,
      birthControlAssess_isAssessDone:
        data?.patientSafeSpacing?.birthControlAssess?.isAssessDone === true
          ? "true"
          : "false",
      birthControlAssess_details:
        data?.patientSafeSpacing?.birthControlAssess?.details,
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    const {
      isBreastfeeding,
      feedLength,
      feedFrequency,
      supplimentFormula,
      feedingComfort,
      isNippleCracked,
      birthControl_isUsed,
      birthControl_details,
      birthControlAssess_isAssessDone,
      birthControlAssess_details,
    } = values;
    setData((prev) => ({
      ...prev,
      patientBreastFeeding: {
        isBreastfeeding: isBreastfeeding === "true" ? true : false,
        feedLength,
        feedFrequency,
        supplimentFormula: supplimentFormula === "true" ? true : false,
        feedingComfort: feedingComfort === "true" ? true : false,
        isNippleCracked: isNippleCracked === "true" ? true : false,
      },
      patientSafeSpacing: {
        birthControl: {
          isUsed: birthControl_isUsed === "true" ? true : false,
          details: birthControl_details,
        },
        birthControlAssess: {
          isAssessDone:
            birthControlAssess_isAssessDone === "true" ? true : false,
          details: birthControlAssess_details,
        },
      },
    }));
    incrementStep();
    navigate("/step-four");
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-two");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-three">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h4 className="form-heading">Breastfeeding</h4>
          <Row>
            <Col>
              <Form.Label>Are you currently breastfeeding?</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
                controlId="breastfeeding"
              >
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  {...register("isBreastfeeding", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  {...register("isBreastfeeding", { required: true })}
                />
                {errors.isBreastfeeding && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="feedLength">
                <Form.Label>Length of feedings</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter length of feedings"
                  {...register("feedLength", {
                    required: true,
                  })}
                />
                {errors.feedLength && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="feedFrequency">
                <Form.Label>Frequency of feedings</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter frequency of feedings"
                  {...register("feedFrequency", {
                    required: true,
                  })}
                />
                {errors.feedFrequency && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>
                Do you supplement with (sometimes use) formula?
              </Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
                controlId="supplimentFormula"
              >
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  {...register("supplimentFormula", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  {...register("supplimentFormula", { required: true })}
                />
                {errors.supplimentFormula && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Does your baby takes your breast easily?</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
                controlId="feedingComfort"
              >
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  {...register("feedingComfort", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  {...register("feedingComfort", { required: true })}
                />
                {errors.feedingComfort && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Are your nipples cracked and/or sore?</Form.Label>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 baby-gender"
                controlId="isNippleCracked"
              >
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  {...register("isNippleCracked", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  {...register("isNippleCracked", { required: true })}
                />
                {errors.isNippleCracked && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <h4 className="form-heading">Safe Spacing Plan</h4>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>
                    Are you using, or planning to use, birth control? If so,
                    what type?
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3 baby-gender"
                    controlId="birthControl"
                  >
                    <Form.Check
                      type="radio"
                      label="Yes"
                      value="true"
                      {...register("birthControl_isUsed", {
                        required: true,
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="false"
                      {...register("birthControl_isUsed", { required: true })}
                    />
                    {errors.birthControl_isUsed && (
                      <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="birthControl">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("birthControl_details", {
                    required: true,
                  })}
                />
                {errors.birthControl_details && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>
                    Was birth control administered(given) in today's visit?
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3 baby-gender"
                    controlId="birthControl"
                  >
                    <Form.Check
                      type="radio"
                      label="Yes"
                      value="true"
                      {...register("birthControlAssess_isAssessDone", {
                        required: true,
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="false"
                      {...register("birthControlAssess_isAssessDone", {
                        required: true,
                      })}
                    />
                    {errors.birthControlAssess_isAssessDone && (
                      <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="birthControl">
                <Form.Label>If so, what type?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("birthControlAssess_details", {
                    required: true,
                  })}
                />
                {errors.birthControlAssess_details && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
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

export default StepThree;
