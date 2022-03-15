import "./App.css";
import Button from "./components/Button";
import React, {useState} from "react";

function App() {
  const [questions, setQuestions] = useState([])
  //properties
  //code, name, question, subquestion (optional), subject, reviewed

  return (
    <div className="app">
      <header className="app-header">
        <p className="header" style={{color: "white"}}>Identificador único de questões</p>
      </header>
      <div className="action-buttons">
        <Button label="Excluir" isDestructive buttonMargin="0px 16px 0px 0px" />
        <Button label="Adicionar" />
      </div>
      <div className="questions-list">
      </div>
    </div>
  );
}

export default App;
