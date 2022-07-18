import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DataContext from "../../../context/DataContext";
import Stepper from "../../stepper/Stepper";
import {
  ATLEAST_ONE_SELECT,
  REQUIRED_ERROR_MSG,
} from "../../utils/constants";
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
      patient: {
        ...values,
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
              <Form.Label>Are you currently Breastfeeding?</Form.Label>
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
                <Form.Label>Length Of Feedings</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Length Of Feedings"
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
                <Form.Label>Frequency Of Feedings</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Frequency Of Feedings"
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
                Do you suplement with (sometimes use) formula?
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
              <Form.Label>
                Are you using, or planning to use, birth control?If so, what
                type?
              </Form.Label>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender" controlId="birthControl">
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="Yes"
                  {...register("birthControl.isUsed", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  {...register("birthControl.isUsed", { required: true })}
                />
                {errors.birthControl && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="birthControl">
            <Form.Label>Comments :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter details"
              {...register("birthControl.details", {
                required: true,
              })}
            />
            {errors.birthControl && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>

          <Row>
            <Col>
              <Form.Label>
                Was birth control administered(given) in today's visit?
              </Form.Label>
            </Col>
            <Col>
              <Form.Group className="mb-3 baby-gender" controlId="birthControl">
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="Yes"
                  {...register("birthControlAssess.isAssessDone", {
                    required: true,
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  {...register("birthControlAssess.isAssessDone", { required: true })}
                />
                {errors.birthControl && (
                  <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="birthControl">
            <Form.Label>Comments :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter details"
              {...register("birthControlAssess.details", {
                required: true,
              })}
            />
            {errors.birthControl && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>

          <Button variant="secondary" type="submit">
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepThree;