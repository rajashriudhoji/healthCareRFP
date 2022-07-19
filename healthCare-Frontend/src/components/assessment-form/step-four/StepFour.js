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

const StepFour = () => {
  const navigate = useNavigate();
  const { setData, incrementStep, decrementStep, step } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (values) => {
    console.log(values);

    incrementStep();
    navigate("/step-five");
  };

  const handlePreviousClick = () => {
    decrementStep();
    navigate("/step-three");
  };

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-four">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h4 className="form-heading">Psycho-Social Assessment</h4>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>
                    Do you feel comfortable in your relationship with your baby?
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

export default StepFour;
