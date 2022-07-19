import "./header.css";
import { useContext, useEffect } from "react";
import DataContext from "../../../context/DataContext";
import { createBrowserHistory } from "history";

const Header = () => {
  const { setStep } = useContext(DataContext);
  const history = createBrowserHistory();

  useEffect(() => {
    const filterParams = history.location.pathname;
    if (filterParams === "/step-one") {
      setStep(1);
    } else if (filterParams === "/step-two") {
      setStep(2);
    } else if (filterParams === "/step-three") {
      setStep(3);
    } else if (filterParams === "/step-four") {
      setStep(4);
    } else if (filterParams === "/step-five") {
      setStep(5);
    } else if (filterParams === "/step-six") {
      setStep(6);
    }
  }, []);
  return (
    <div className="form-header">
      <h2>Postpartum Assessment Form</h2>
    </div>
  );
};

export default Header;
