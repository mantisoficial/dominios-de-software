import React from "react";
import "./QuestionItem.css";

const QuestionItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p>{item.code}</p>
        <p>{item.name}</p>
      </div>
      <div className="item-content-body">
        <p>{item.question}</p>
        {item.subquestions.length > 0
          ? item.subquestions.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.subquestion}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="item-content-footer">
        <p>Matéria: {item.subject}</p>
      </div>
    </div>
  );
};

export default QuestionItem;
