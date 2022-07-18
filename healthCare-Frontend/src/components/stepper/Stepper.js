import "./stepper.css";

function Stepper(props) {
  const { step } = props;
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <form id="msform">
              <ul id="progressbar">
                <li className={step === 1 ? "active" : ""} id="account">
                  <strong>Basic Info</strong>
                </li>
                <li className={step === 2 ? "active" : ""} id="personal">
                  <strong>Visit Check</strong>
                </li>
                <li className={step === 3 ? "active" : ""} id="payment">
                  <strong>Breastfeeding</strong>
                </li>
                <li className={step === 4 ? "active" : ""} id="confirm">
                  <strong>STEP 4</strong>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
