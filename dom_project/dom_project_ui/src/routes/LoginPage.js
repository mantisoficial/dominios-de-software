import React, { useState } from "react";
import InputField from "../components/InputField";
import "./LoginPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Service from "../api/Service";

const LoginPage = () => {
  const user = {
    username: "admin",
    password: "admin",
  };

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleLoginValidation = () => {
    var isValid = true;

    if (
      userLogin.username !== user.username ||
      userLogin.password !== user.password
    ) {
      isValid = false;
      setErrorMessage("Login ou senha inválidos");
      return isValid;
    }

    return isValid;
  };

  const handleSuccesfullLogin = () => {
    navigate("/app");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-inputs">
        <div className="login-username">
          <div style={{ margin: "auto 0px" }}>
            <p
              className="headline"
              style={{ margin: "0px 8px 0px 0px", color: "white" }}
            >
              Usuário:
            </p>
          </div>
          <InputField
            placeholder="Insira o login"
            name="username"
            value={userLogin.username}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-password">
          <div style={{ margin: "auto 0px" }}>
            <p
              className="headline"
              style={{ margin: "0px 18px 0px 0px", color: "white" }}
            >
              Senha:
            </p>
          </div>
          <InputField
            placeholder="Insira a senha"
            name="password"
            value={userLogin.password}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-error">
          <div style={{ margin: "8px 0px", cursor: "pointer" }}>
            <p
              className="body"
              style={{ margin: "0px 0px 0px 0px", color: "red" }}
            >
              {errorMessage}
            </p>
          </div>
        </div>
        <div className="login-actions">
          <Button
            label="Entrar"
            onClick={() => {
              if (handleLoginValidation()) {
                handleSuccesfullLogin();
              }
            }}
          />
          <div
            style={{ margin: "auto 0px", cursor: "pointer" }}
            onClick={handleRegister}
          >
            <p
              className="headline"
              style={{ margin: "0px 0px 0px 12px", color: "aqua" }}
            >
              Fazer cadastro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
