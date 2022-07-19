import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import {
  ATLEAST_ONE_SELECT,
  NEXT_BUTTON_TEXT,
  REQUIRED_ERROR_MSG,
  VALID_PHONE_NUMBER,
} from "../../../utils/constants";
import Stepper from "../../stepper/Stepper";
import Header from "../form-header/Header";
import "./stepone.css";

const StepOne = () => {
  const navigate = useNavigate();
  const { data, setData, incrementStep, step, isReadOnly } =
    useContext(DataContext);
  console.log({ gender: data?.patientBasicInfo?.babyGender });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      motherName: data?.patientBasicInfo?.motherName,
      babyName: data?.patientBasicInfo?.babyName,
      babyDOB: data?.patientBasicInfo?.babyDOB,
      address: data?.patientBasicInfo?.address,
      email: data?.patientBasicInfo?.email,
      phone: data?.patientBasicInfo?.phone,
      babyGender: data?.patientBasicInfo?.babyGender,
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    setData((prev) => ({
      ...prev,
      patientBasicInfo: {
        ...values,
        phone: +values.phone,
      },
    }));
    incrementStep();
    navigate("/step-two");
  };

  console.log({ data });

  return (
    <div>
      <Header />
      <Stepper step={step} />
      <div className="step-form container step-one">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group className="mb-3" controlId="motherName">
            <Form.Label>Mom's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mom's name"
              {...register("motherName", {
                required: true,
              })}
              disabled={isReadOnly}
            />
            {errors.motherName && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="babyName">
                <Form.Label>Baby's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your baby's name"
                  {...register("babyName", {
                    required: true,
                  })}
                  disabled={isReadOnly}
                />
                {errors.babyName && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="babyDOB">
                <Form.Label>Baby's DOB</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter your baby's Date of birth"
                  {...register("babyDOB", {
                    required: true,
                  })}
                  disabled={isReadOnly}
                />
                {errors.babyDOB && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="address"
              {...register("address", {
                required: true,
              })}
              disabled={isReadOnly}
            />
            {errors.address && <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>}
          </Form.Group>
          <Row>
            <Col>
              <fieldset disabled={isReadOnly}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                  )}
                </Form.Group>
              </fieldset>
            </Col>
            <Col>
              <fieldset disabled={isReadOnly}>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d{10}$/,
                    })}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="errorMsg">{VALID_PHONE_NUMBER}</p>
                  )}
                </Form.Group>
              </fieldset>
            </Col>
          </Row>
          <fieldset disabled={isReadOnly}>
            <Form.Group className="mb-3 baby-gender" controlId="babyGender">
              <Form.Label>Baby's Gender</Form.Label>
              <Form.Check
                type="radio"
                label="M"
                value="M"
                {...register("babyGender", {
                  required: true,
                })}
              />
              <Form.Check
                type="radio"
                label="F"
                value="F"
                {...register("babyGender", { required: true })}
              />
              {errors.babyGender && (
                <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
              )}
            </Form.Group>
          </fieldset>
          <Button variant="secondary" type="submit">
            {NEXT_BUTTON_TEXT}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
