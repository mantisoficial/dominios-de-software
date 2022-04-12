import "./App.css";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import QuestionItem from "../components/QuestionItem";
import Dialog from "../components/Dialog";
import { useNavigate } from "react-router-dom";
import Service from "../api/Service";

function App() {
  const [questions, setQuestions] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cada questão será objetiva com 5 alternativas, sendo só uma correta. Vou colocar um exemplo meia boca aqui só para ilustrar:
  // {
  //  code: 2812,
  //  name: "Teste 2",
  //  question: "Qual a idade do stone?",
  //  option1: "12",
  //  option2: "13",
  //  option3: "20",
  //  option4: "21",
  //  option5: "28",
  //  answer: "21",
  //  subject: "Matemática",
  //  subjectType: "Exact",
  //  reviewed: false,
  // }
  //
  //
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      await Service.get("questions", (_, data) => {
        setQuestions(data);
      });
    };
    getQuestions();
  }, []);

  const handleLogout = () => {
    navigate("/")
  };

  const onAddedQuestion = (value) => {
    setQuestions((previous) => [...previous, value]);
    setIsModalOpen(false);
  };

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
        <Button label="Adicionar" onClick={toggleModal} />
        <div style={{margin: "0px 0px 0px 8px"}}/>
        <Button label="Sair" onClick={handleLogout} isDestructive/>
        {isModalOpen ? (
          <Dialog
            isOpen={isModalOpen}
            onCancel={toggleModal}
            onSuccessCallback={onAddedQuestion}
            existingQuestions={questions}
          />
        ) : null}
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
