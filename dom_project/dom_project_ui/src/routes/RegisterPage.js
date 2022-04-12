import React from "react";
import "./RegisterPage.css";
import Service from "../api/Service";
import InputField from "../components/InputField";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-inputs">
        <div className="register-input-row"></div>
        <div className="register-input-row"></div>
        <div className="register-input-row"></div>
        <div className="register-input-row"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
