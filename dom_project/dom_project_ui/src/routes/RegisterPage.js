import React, { useState, useEffect } from "react";
import "./RegisterPage.css";
import Service from "../api/Service";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    ssn: "",
    name: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      await Service.get("users", (_, data) => {
        setUsers(data);
      });
    };
    getUsers();
  }, []);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegisterCancel = () => {
    navigate("/");
  };

  //TODO - Validar EMAIL
  const handleRegisterValidation = () => {
    var isValid = true;

    users.map((item) => {
      if (newUser.email === item.email) {
        isValid = false;
        setErrorMessage("Email já cadastrado.");
        return isValid;
      }
      if (newUser.name === item.name) {
        isValid = false;
        setErrorMessage("Nome já cadastrado.");
        return isValid;
      }
      if (newUser.ssn === item.email) {
        isValid = false;
        setErrorMessage("CPF já cadastrado.");
        return isValid;
      }
      return isValid;
    });

    if (!newUser.email || !newUser.name || !newUser.ssn || !newUser.password) {
      isValid = false;
      setErrorMessage("Preencha o formulário corretamente");
      return isValid;
    }

    return isValid;
  };

  const postUser = async (json) => {
    await Service.post("users", json, (code, data) => {
      if (code === 200) {
        let value = newUser;
        value.id = data.id;
        navigate("/app");
      }
    });
  };

  const handleSubmit = (state) => {
    postUser(state);
  };

  return (
    <div className="register-container">
      <div className="register-inputs">
        <div className="register-input-header">
          <p
            className="subheader"
            style={{ color: "black", margin: "0px 0px 8px 0px" }}
          >
            Insira seus dados de cadastro
          </p>
        </div>
        <div className="register-input-row">
          <div className="input-name">
            <p className="headline" style={{ margin: "0px 8px 0px 0px" }}>
              Nome:
            </p>
          </div>
          <InputField
            placeholder="Insira seu nome"
            name="name"
            value={newUser.name}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="register-input-row">
          <div className="input-name">
            <p className="headline" style={{ margin: "0px 8px 0px 0px" }}>
              CPF:
            </p>
          </div>
          <InputField
            placeholder="Insira seu CPF"
            name="ssn"
            value={newUser.ssn}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
            inputLength={11}
            inputType={"text"}
          />
        </div>
        <div className="register-input-row">
          <div className="input-name">
            <p className="headline" style={{ margin: "0px 8px 0px 0px" }}>
              Email:
            </p>
          </div>
          <InputField
            placeholder="Insira seu e-mail"
            name="email"
            value={newUser.email}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="register-input-row">
          <div className="input-name">
            <p className="headline" style={{ margin: "0px 8px 0px 0px" }}>
              Senha:
            </p>
          </div>
          <InputField
            placeholder="Insira sua senha"
            name="password"
            value={newUser.password}
            inputStyle={{ width: "128px", height: "32px" }}
            onChange={handleInputChange}
            inputType={"password"}
          />
        </div>
        <div className="register-error">
          <div style={{ margin: "8px 0px" }}>
            <p
              className="body"
              style={{ margin: "0px 0px 0px 0px", color: "red" }}
            >
              {errorMessage}
            </p>
          </div>
        </div>
        <div className="register-actions">
          <Button
            isDestructive={true}
            label="Voltar"
            onClick={handleRegisterCancel}
          />
          <div style={{ margin: "0px 0px 0px 8px" }}>
            <Button
              label="Cadastrar"
              onClick={() => {
                if (handleRegisterValidation()) {
                  handleSubmit(newUser);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
