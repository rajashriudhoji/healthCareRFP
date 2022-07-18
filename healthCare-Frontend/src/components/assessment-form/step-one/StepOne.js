import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DataContext from "../../../context/DataContext";
import Stepper from "../../stepper/Stepper";
import {
  ATLEAST_ONE_SELECT,
  REQUIRED_ERROR_MSG,
  VALID_PHONE_NUMBER,
} from "../../utils/constants";
import Header from "../form-header/Header";
import "./stepone.css";

const StepOne = (props) => {
  const { step, handleNextClick } = props;
  const { setData } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (values) => {
    console.log(values);
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
          <Form.Group className="mb-3" controlId="motherName">
            <Form.Label>Mom's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mom's name"
              {...register("motherName", {
                required: true,
              })}
            />
            {errors.motherName && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="babyName">
            <Form.Label>Baby's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your baby's name"
              {...register("babyName", {
                required: true,
              })}
            />
            {errors.babyName && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="babyDOB">
            <Form.Label>Baby's DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter your baby's Date of birth"
              {...register("babyDOB", {
                required: true,
              })}
            />
            {errors.babyName && (
              <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="address"
              {...register("address", {
                required: true,
              })}
            />
            {errors.address && <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>}
          </Form.Group>
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
              {...register("babyGender", {})}
            />
            {errors.babyGender && (
              <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
            )}
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={handleNextClick}>
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
