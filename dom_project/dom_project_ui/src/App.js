import "./App.css";
import Button from "./components/Button";
import React, { useState } from "react";
import QuestionItem from "./components/QuestionItem";
import Dialog from "./components/Dialog";

function App() {
  const [questions, setQuestions] = useState([
    {
      code: 2605,
      name: "Teste",
      question: "Qual o nome do stone?",
      subquestions: [
        {
          text: "a) Subitem 1",
        },
        {
          text: "b) Subitem 2",
        },
      ],
      subject: "História",
      subjectType: "Human",
      reviewed: true,
    },
    {
      code: 2812,
      name: "Teste 2",
      question: "Qual a idade do stone?",
      subquestions: [],
      subject: "Matemática",
      subjectType: "Exact",
      reviewed: false,
    },
  ]);
  //properties
  //code, name, question, subquestion (optional), subject, reviewed

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((previous) => !previous);
  };

  return (
    <div className="app">
      <header className="app-header">
        <p className="header" style={{ color: "white" }}>
          Identificador único de questões
        </p>
      </header>
      <div className="action-buttons">
        <Button label="Excluir" isDestructive buttonMargin="0px 16px 0px 0px" />
        <Button label="Adicionar" onClick={toggleModal} />
        <Dialog isOpen={isModalOpen} />
      </div>
      <div className="questions-list">
        {questions.map((item, index) => {
          return (
            <div key={index}>
              <QuestionItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
