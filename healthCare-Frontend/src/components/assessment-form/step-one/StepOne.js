import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../form-header/Header";

const StepOne = () => {
  return (
    <div>
      <Header />
      <div className="step-form container">
        <Form>
          <Form.Group className="mb-3" controlId="motherName">
            <Form.Label>Mom's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter mom's name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="babyName">
            <Form.Label>Baby's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your baby name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
