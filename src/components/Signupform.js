import React, { useState, useEffect } from "react";
import Validations from "./Validations";
import axios from "axios";

const Signupform = ({ submitform }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setdataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleformsubmit = (event) => {
    event.preventDefault();
    setErrors(Validations(values));
    setdataIsCorrect(true);
    axios.post("https://samplesignup-67048-default-rtdb.firebaseio.com/Signup_info.json",values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitform(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wapper">
          <div className="name">
            <label className="label" />
            * Full Name
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="name">
            <label className="label" />
            * Email
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="name">
            <label className="label" />
            * Password
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="button" onClick={handleformsubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
