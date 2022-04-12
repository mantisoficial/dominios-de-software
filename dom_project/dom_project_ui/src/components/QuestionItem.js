import React from "react";
import "./QuestionItem.css";
import SubjectBadge from "./SubjectBadge";

const QuestionItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.code})
        </p>
        <p className="subheader">{item.title}</p>
      </div>
      <div className="item-content-body">
        <div>
          <p className="body" style={{ margin: "0px 0px 8px 0px" }}>
            {item.text}
          </p>
        </div>
        <div className="item-answers-list">
          <div className="answers-list-header">
            <p className="body-medium">Respostas:</p>
          </div>
        </div>
      </div>
      <div className="item-content-footer">
        <div style={{ margin: "auto 0px" }}>
          <p className="metadata" style={{ marginRight: "4px" }}>
            Matéria:
          </p>
        </div>
        <SubjectBadge
          isExactScience={item.subject === 0 ? true : false}
          label={item.subject === 0 ? "Exatas" : "Humanas"}
        />
      </div>
    </div>
  );
};

export default QuestionItem;
