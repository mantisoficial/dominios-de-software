import React, { useState } from "react";
import "./Dialog.css";
import Button from "./Button";
import InputField from "./InputField";
import Service from "../api/Service";
import { similarity } from "../helpers/levenshtein";

const Dialog = ({ isOpen, onCancel, onSuccessCallback, existingQuestions }) => {
  //#region UseState and Variables
  const [newQuestion, setNewQuestion] = useState({
    code: "",
    title: "",
    text: "",
    subject: "",
    subjectType: "",
    answerValues: [
      {
        text: "",
        isCorrect: false,
      },
      {
        text: "",
        isCorrect: false,
      },
      {
        text: "",
        isCorrect: false,
      },
      {
        text: "",
        isCorrect: false,
      },
      {
        text: "",
        isCorrect: false,
      },
    ],
  });

  const [errorMessage, setErrorMessage] = useState("");

  const subjectOptions = [
    {
      name: "Exatas",
    },
    {
      name: "Humanas",
    },
    {
      name: "Biológicas",
    },
  ];
  //#endregion

  //#region Handles
  const handleInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleAnswerInputChange = (index, e, isCheckbox) => {
    if (!isCheckbox) {
      setNewQuestion({
        ...newQuestion,
        answerValues: newQuestion.answerValues.map((item, itemIndex) => {
          if (itemIndex === index) {
            item.text = e.target.value;
          }
          return item;
        }),
      });
    } else {
      setNewQuestion({
        ...newQuestion,
        answerValues: newQuestion.answerValues.map((item, itemIndex) => {
          if (itemIndex === index) {
            if (item.isCorrect === false) item.isCorrect = true;
            else if (item.isCorrect === true) item.isCorrect = false;
          }
          return item;
        }),
      });
    }
  };

  const handleComboBoxChange = (e) => {
    if (e.target.value === "Exatas") {
      setNewQuestion({
        ...newQuestion,
        subject: 1,
        subjectType: "Exatas",
      });
    } else if (e.target.value === "Humanas") {
      setNewQuestion({
        ...newQuestion,
        subject: 2,
        subjectType: "Humanas",
      });
    } else if (e.target.value === "Biológicas") {
      setNewQuestion({
        ...newQuestion,
        subject: 3,
        subjectType: "Biológicas",
      });
    }
  };

  const handleValidation = () => {
    var isValid = true;

    existingQuestions.map((item) => {
      if (similarity(newQuestion.text, item.text) > 0.6) {
        isValid = false;
        setErrorMessage("Questões iguais não são permitidas");
        return isValid;
      }
      return isValid;
    });

    if (!newQuestion.code || !newQuestion.text || !newQuestion.title) {
      isValid = false;
      setErrorMessage("Preencha o formulário corretamente");
      return isValid;
    }

    newQuestion.answerValues.map((item, index) => {
      if (!item.text) {
        isValid = false;
        setErrorMessage("Preencha o formulário corretamente");
        return isValid;
      }
    });

    return isValid;
  };

  const postQuestion = async (json) => {
    await Service.post("questions", json, (code, data) => {
      if (code === 200) {
        let value = newQuestion;
        value.id = data.id;
        onSuccessCallback(value);
      }
    });
  };

  const handleSubmit = (state) => {
    postQuestion(state);
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
                Código:
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
                Título:
              </p>
            </div>
            <InputField
              name="title"
              value={newQuestion.title}
              placeholder="Preencha o campo"
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row" style={{ display: "block" }}>
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Enunciado:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "250px", heigth: "30px" }}
              placeholder="Preencha o campo"
              name="text"
              value={newQuestion.text}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row-answers">
            {newQuestion.answerValues.map((item, index) => {
              return (
                <div className="answer-row" key={index}>
                  <div style={{ margin: "auto 0px" }}>
                    <p className="body" style={{ margin: "0px 16px 0px 0px" }}>
                      Opção {index + 1}:
                    </p>
                  </div>
                  <InputField
                    name="text"
                    value={item.text}
                    placeholder="Preencha o campo"
                    inputStyle={{ width: "200px" }}
                    onChange={(e) => {
                      handleAnswerInputChange(index, e, false);
                    }}
                  />
                  <input
                    name="isCorrect"
                    className="text-input"
                    type="checkbox"
                    onChange={(e) => {
                      handleAnswerInputChange(index, e, true);
                    }}
                    value={item.isCorrect}
                  />
                </div>
              );
            })}
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 0px 0px" }}>
                Matéria:
              </p>
            </div>
            <select
              name="subjectType"
              className="text-input"
              onChange={handleComboBoxChange}
              value={newQuestion.subjectType}
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
