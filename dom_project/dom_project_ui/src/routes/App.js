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
    navigate("/");
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
        <div style={{ margin: "0px 0px 0px 8px" }} />
        <Button label="Sair" onClick={handleLogout} isDestructive />
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
          return <QuestionItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
