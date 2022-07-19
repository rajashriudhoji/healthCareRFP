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

const StepFour = () => {
  const navigate = useNavigate();
  const { data, setData, incrementStep, decrementStep, step, isReadOnly } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      relationWithBaby_isComfortable:
        data?.patientPsychoSocialAssess?.relationWithBaby?.isComfortable ===
        true
          ? "true"
          : "false",
      relationWithBaby_details:
        data?.patientPsychoSocialAssess?.relationWithBaby?.details,
      houseMemberStatus_isAdjusted:
        data?.patientPsychoSocialAssess?.houseMemberStatus?.isAdjusted === true
          ? "true"
          : "false",
      houseMemberStatus_details:
        data?.patientPsychoSocialAssess?.houseMemberStatus?.details,
      fatherStatus_isSupportive:
        data?.patientPsychoSocialAssess?.fatherStatus?.isSupportive === true
          ? "true"
          : "false",
      fatherStatus_details:
        data?.patientPsychoSocialAssess?.fatherStatus?.detail,
      safety_isSafe:
        data?.patientPsychoSocialAssess?.safety?.isSafe === true
          ? "true"
          : "false",
      safety_details: data?.patientPsychoSocialAssess?.safety?.details,
      unsafeRelationStatus_isRelationThreat:
        data?.patientPsychoSocialAssess?.unsafeRelationStatus
          ?.isRelationThreat === true
          ? "true"
          : "false",
      unsafeRelationStatus_details:
        data?.patientPsychoSocialAssess?.unsafeRelationStatus?.details,
      resourceStatus_isEnoughResources:
        data?.patientPsychoSocialAssess?.resourceStatus?.isEnoughResources ===
        true
          ? "true"
          : "false",
      resourceStatus_details:
        data?.patientPsychoSocialAssess?.resourceStatus?.details,
    },
  });

  const handleFormSubmit = (values) => {
    console.log({ values });
    const {
      relationWithBaby_isComfortable,
      relationWithBaby_details,
      houseMemberStatus_isAdjusted,
      houseMemberStatus_details,
      fatherStatus_isSupportive,
      fatherStatus_details,
      fatherStatus,
      safety_isSafe,
      safety_details,
      unsafeRelationStatus_isRelationThreat,
      unsafeRelationStatus_details,
      resourceStatus_isEnoughResources,
      resourceStatus_details,
      resourceStatus,
    } = values;
    setData((prev) => ({
      ...prev,
      patientPsychoSocialAssess: {
        relationWithBaby: {
          isComfortable:
            relationWithBaby_isComfortable === "true" ? true : false,
          details: relationWithBaby_details,
        },
        houseMemberStatus: {
          isAdjusted: houseMemberStatus_isAdjusted === "true" ? true : false,
          details: houseMemberStatus_details,
        },
        fatherStatus: {
          isSupportive: fatherStatus_isSupportive === "true" ? true : false,
          detail: fatherStatus_details,
          isHappy: fatherStatus.includes("happy") ? true : false,
          isAngry: fatherStatus.includes("angry") ? true : false,
          isInvolved: fatherStatus.includes("isInvolved") ? true : false,
          isSure: fatherStatus.includes("isSure") ? true : false,
        },
        safety: {
          isSafe: safety_isSafe === "true" ? true : false,
          details: safety_details,
        },
        unsafeRelationStatus: {
          isRelationThreat:
            unsafeRelationStatus_isRelationThreat === "true" ? true : false,
          details: unsafeRelationStatus_details,
        },
        resourceStatus: {
          isEnoughResources:
            resourceStatus_isEnoughResources === "true" ? true : false,
          details: resourceStatus_details,
          isHousingAvailable: resourceStatus.includes("housing") ? true : false,
          isFinanceAvailable: resourceStatus.includes("financial")
            ? true
            : false,
          isFoodAvailable: resourceStatus.includes("food") ? true : false,
          isFamilyAvailable: resourceStatus.includes("family") ? true : false,
          isAny: resourceStatus.includes("other") ? true : false,
        },
      },
    }));
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
                  <fieldset disabled={isReadOnly}>
                    <Form.Group
                      className="mb-3"
                      controlId="relationWithBaby_isComfortable"
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("relationWithBaby_isComfortable", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("relationWithBaby_isComfortable", {
                          required: true,
                        })}
                      />
                      {errors.relationWithBaby_isComfortable && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="relationWithBaby_details">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("relationWithBaby_details", {})}
                  disabled={isReadOnly}
                />
                {errors.relationWithBaby_details && (
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
                    Have your household members adjusted to your baby?
                  </Form.Label>
                </Col>
                <Col>
                  <fieldset disabled={isReadOnly}>
                    <Form.Group
                      className="mb-3"
                      controlId="houseMemberStatus_isAdjusted"
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("houseMemberStatus_isAdjusted", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("houseMemberStatus_isAdjusted", {
                          required: true,
                        })}
                      />
                      {errors.houseMemberStatus_isAdjusted && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="houseMemberStatus_details"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("houseMemberStatus_details", {})}
                  disabled={isReadOnly}
                />
                {errors.houseMemberStatus_details && (
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
                    Is the baby's father supportive and/or involved with the
                    baby?
                  </Form.Label>
                </Col>
                <Col>
                  <fieldset disabled={isReadOnly}>
                    <Form.Group
                      className="mb-3"
                      controlId="fatherStatus_isSupportive"
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("fatherStatus_isSupportive", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("fatherStatus_isSupportive", {
                          required: true,
                        })}
                      />
                      {errors.fatherStatus_isSupportive && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="fatherStatus_details">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("fatherStatus_details", {})}
                  disabled={isReadOnly}
                />
                {errors.fatherStatus_details && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>
                How does your partner feel about the baby?
              </Form.Label>
            </Col>
            <Col>
              <fieldset disabled={isReadOnly}>
                <Form.Group className="mb-3" controlId="fatherStatus">
                  <Form.Check
                    type="radio"
                    label="Happy"
                    value="happy"
                    {...register("fatherStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="radio"
                    label="Angry"
                    value="angry"
                    {...register("fatherStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="radio"
                    label="Refused to be involved"
                    value="isInvolved"
                    {...register("fatherStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="radio"
                    label="Not sure"
                    value="isSure"
                    {...register("fatherStatus", {
                      required: true,
                    })}
                  />
                  {errors.fatherStatus && (
                    <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                  )}
                </Form.Group>
              </fieldset>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>
                    Do you feel safe at home, school and work?
                  </Form.Label>
                </Col>
                <Col>
                  <fieldset disabled={isReadOnly}>
                    <Form.Group className="mb-3" controlId="safety_isSafe">
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("safety_isSafe", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("safety_isSafe", {
                          required: true,
                        })}
                      />
                      {errors.safety_isSafe && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="safety_details">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("safety_details", {})}
                  disabled={isReadOnly}
                />
                {errors.safety_details && (
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
                    Are you in relationship with someone who threatens you or
                    hurts you?
                  </Form.Label>
                </Col>
                <Col>
                  <fieldset disabled={isReadOnly}>
                    <Form.Group
                      className="mb-3"
                      controlId="unsafeRelationStatus_isRelationThreat"
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("unsafeRelationStatus_isRelationThreat", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("unsafeRelationStatus_isRelationThreat", {
                          required: true,
                        })}
                      />
                      {errors.unsafeRelationStatus_isRelationThreat && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="unsafeRelationStatus_details"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("unsafeRelationStatus_details", {})}
                  disabled={isReadOnly}
                />
                {errors.unsafeRelationStatus_details && (
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
                    Do you have the resources to keep yourself and your baby
                    healthy?
                  </Form.Label>
                </Col>
                <Col>
                  <fieldset disabled={isReadOnly}>
                    <Form.Group
                      className="mb-3"
                      controlId="resourceStatus_isEnoughResources"
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        value="true"
                        {...register("resourceStatus_isEnoughResources", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="false"
                        {...register("resourceStatus_isEnoughResources", {
                          required: true,
                        })}
                      />
                      {errors.resourceStatus_isEnoughResources && (
                        <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                      )}
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="resourceStatus_details">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter details"
                  {...register("resourceStatus_details", {})}
                  disabled={isReadOnly}
                />
                {errors.resourceStatus_details && (
                  <p className="errorMsg">{REQUIRED_ERROR_MSG}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>If no, what needs exist?</Form.Label>
            </Col>
            <Col>
              <fieldset disabled={isReadOnly}>
                <Form.Group className="mb-3" controlId="resourceStatus">
                  <Form.Check
                    type="checkbox"
                    label="Housing"
                    value="housing"
                    {...register("resourceStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Financial"
                    value="financial"
                    {...register("resourceStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Food"
                    value="food"
                    {...register("resourceStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Family"
                    value="family"
                    {...register("resourceStatus", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Other"
                    value="other"
                    {...register("resourceStatus", {
                      required: true,
                    })}
                  />
                  {errors.resourceStatus && (
                    <p className="errorMsg">{ATLEAST_ONE_SELECT}</p>
                  )}
                </Form.Group>
              </fieldset>
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
