import React, { useState } from "react";
import Signupform from "./Signupform";
import SignupFromSuccess from "./SignupFromSuccess";
const form = () => {
  const [formIsSubmitted, setformIsSubmitted] = useState(false);
  const submitform = () => {
    setformIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <Signupform submitform={submitform} />
      ) : (
        <SignupFromSuccess />
      )}
    </div>
  );
};

export default form;
