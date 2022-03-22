import React, { useState } from "react";
import "./Dialog.css";
import Button from "./Button";
import InputField from "./InputField";

const Dialog = ({ isOpen, onCancel, onSave, existingQuestions }) => {
  //#region UseState and Variables
  const [newQuestion, setNewQuestion] = useState({
    code: "",
    name: "",
    question: "",
    subject: "Matemática",
    subjectType: "Exact",
    reviewed: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const subjectOptions = [
    {
      name: "Matemática",
    },
    {
      name: "História",
    },
    {
      name: "Física",
    },
    {
      name: "Geografia",
    },
  ];
  //#endregion

  //#region Handles
  const handleInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    if (newQuestion.reviewed === false)
      setNewQuestion({ ...newQuestion, reviewed: true });
    else setNewQuestion({ ...newQuestion, reviewed: false });
  };

  const handleComboBoxChange = (e) => {
    if (e.target.value === "Geografia" || e.target.value === "História") {
      setNewQuestion({
        ...newQuestion,
        subject: e.target.value,
        subjectType: "Human",
      });
    } else {
      if (e.target.value === "Física" || e.target.value === "Matemática") {
        setNewQuestion({
          ...newQuestion,
          subject: e.target.value,
          subjectType: "Exact",
        });
      }
    }
  };

  const handleValidation = () => {
    var isValid = true;

    existingQuestions.map((item) => {
      if (newQuestion.question === item.question) {
        isValid = false;
        setErrorMessage("Questões iguais não são permitidas");
        return isValid;
      }
      return isValid;
    });

    if (!newQuestion.code || !newQuestion.question) {
      isValid = false;
      setErrorMessage("Preencha o formulário corretamente");
      return isValid;
    }

    return isValid;
  };

  const handleSubmit = (state) => {
    existingQuestions.push(state);
    onSave();
  };
  //#endregion

  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p className="subheader">Nova questão</p>
        </div>
        <div className="dialog-body">
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                {" "}
                Código:{" "}
              </p>
            </div>
            <InputField
              name="code"
              value={newQuestion.code}
              inputStyle={{ width: "40px" }}
              inputLength={4}
              placeholder="Cód"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 16px 0px 0px" }}>
                {" "}
                nome:{" "}
              </p>
            </div>
            <InputField
              name="name"
              value={newQuestion.name}
              placeholder="Preencha o campo"
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row" style={{ display: "block" }}>
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                {" "}
                Questão:{" "}
              </p>
            </div>
            <InputField
              inputStyle={{ width: "250px", heigth: "30px" }}
              placeholder="Preencha o campo"
              name="question"
              value={newQuestion.question}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 0px 0px" }}>
                {" "}
                Matéria:{" "}
              </p>
            </div>
            <select
              name="subject"
              className="text-input"
              onChange={handleComboBoxChange}
              value={newQuestion.subject}
            >
              {subjectOptions.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 0px 0px" }}>
                {" "}
                Revisado:{" "}
              </p>
            </div>
            <input
              name="reviewed"
              className="text-input"
              type="checkbox"
              onChange={handleCheckboxChange}
              value={newQuestion.reviewed}
            ></input>
          </div>
        </div>
        <div className="dialog-error">
          <p className="body" style={{ color: "red" }}>
            {errorMessage}
          </p>
        </div>
        <div className="dialog-footer">
          <Button
            label="Salvar"
            onClick={() => {
              if (handleValidation()) handleSubmit(newQuestion);
            }}
            buttonMargin={"0px 8px 0px 0px"}
          />
          <Button label="Cancelar" isDestructive onClick={onCancel} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
