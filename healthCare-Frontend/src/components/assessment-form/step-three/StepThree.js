import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DataContext from "../../../context/DataContext";
import Stepper from "../../stepper/Stepper";
import { ATLEAST_ONE_SELECT, REQUIRED_ERROR_MSG } from "../../utils/constants";
import Header from "../form-header/Header";
import "../step-one/stepone.css";

const StepThree = () => {
  const { setData, handleNextClick, step } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (values) => {
    console.log(values);
    handleNextClick();
    setData((prev) => ({
      ...prev,
      p_breastFeeding: {
        isBreastfeeding: values.isBreastfeeding,
        feedLength: values.feedLength,
        feedFrequency: values.feedFrequency,
        supplimentFormula: values.supplimentFormula,
        feedingComfort: values.feedingComfort,
        isNippleCracked: values.isNippleCracked,
      },
      p_safeSpacing: {
        birthControl: {
          isUsed: values.birthControl.isUsed,
          details: values.birthControl.details,
        },
        birthControlAssess: {
          isAssessDone: values.birthControlAssess.isAssessDone,
          details: values.birthControlAssess.details,
        },
      },
    }));
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-one">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h3>Breastfeeding</h3>
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
                  value="Yes"
                  {...register("isBreastfeeding", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
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
                  value="Yes"
                  {...register("supplimentFormula", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
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
                  value="Yes"
                  {...register("feedingComfort", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
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
                  value="Yes"
                  {...register("isNippleCracked", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  {...register("isNippleCracked", { required: true })}
                />
                {errors.isNippleCracked && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <h3>Safe Spacing Plan</h3>
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
                      value="Yes"
                      {...register("birthControl_isUsed", {
                        required: true,
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="No"
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
              {" "}
              <Form.Group className="mb-3" controlId="birthControl">
                <Form.Label>Comment :</Form.Label>
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
                      value="Yes"
                      {...register("birthControlAssess_isAssessDone", {
                        required: true,
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="No"
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

          <Button variant="secondary" type="submit">
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepThree;
