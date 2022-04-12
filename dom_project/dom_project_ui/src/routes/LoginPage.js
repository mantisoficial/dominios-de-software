import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import "./LoginPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Service from "../api/Service";

const LoginPage = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      await Service.get("users", (_, data) => {
        setUsers(data);
      });
    };
    getUsers();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleLoginValidation = () => {
    var isValid = false;
    setErrorMessage("Login e/ou senha inválidos");

    users.map((item) => {
      if (
        userLogin.email === item.email &&
        userLogin.password === item.password
      ) {
        isValid = true;
        setErrorMessage("");
        return isValid;
      }
    });

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
          <div style={{ margin: "auto 0px", width: "40%" }}>
            <p
              className="headline"
              style={{ margin: "0px 8px 0px 0px", color: "white" }}
            >
              Email:
            </p>
          </div>
          <InputField
            placeholder="Insira seu email"
            name="email"
            value={userLogin.email}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-password">
          <div style={{ margin: "auto 0px", width: "40%" }}>
            <p
              className="headline"
              style={{ margin: "0px 18px 0px 0px", color: "white" }}
            >
              Senha:
            </p>
          </div>
          <InputField
            placeholder="Insira sua senha"
            name="password"
            value={userLogin.password}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
            inputType={"password"}
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
