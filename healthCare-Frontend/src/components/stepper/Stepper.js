import "./stepper.css";

function Stepper(props) {
  const { step } = props;
  return (
    <div>
      <form id="msform">
        <ul id="progressbar">
          <li className={step >= 1 ? "active" : ""} id="account">
            <strong>Basic Info</strong>
          </li>
          <li className={step >= 2 ? "active" : ""} id="personal">
            <strong>Postpartum Visit Check</strong>
          </li>
          <li className={step >= 3 ? "active " : ""} id="payment">
            <strong>Breastfeeding</strong>
          </li>
          <li className={step >= 4 ? "active " : ""} id="confirm">
            <strong>Psycho-Social Assessment</strong>
          </li>
          <li className={step >= 5 ? "active " : ""} id="confirm">
            <strong>Educational Discussions</strong>
          </li>
          <li className={step >= 6 ? "active " : ""} id="confirm">
            <strong>Follow-Up Appointments</strong>
          </li>
          <li className={step >= 7 ? "active " : ""} id="confirm">
            <strong>Step End</strong>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Stepper;
