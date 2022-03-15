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
        <p className="subheader">{item.name}</p>
      </div>
      <div className="item-content-body">
        <p className="body" style={{ margin: "0px 0px 8px 0px" }}>
          {item.question}
        </p>
        {item.subquestions.length > 0
          ? item.subquestions.map((item, index) => {
              return (
                <div key={index} style={{ margin: "0px 0px 8px 0px" }}>
                  <p className="metadata">{item.text}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="item-content-footer">
        <div style={{ margin: "auto 0px" }}>
          <p className="metadata" style={{ marginRight: "4px" }}>
            Matéria:{" "}
          </p>
        </div>
        <SubjectBadge
          isExactScience={item.subjectType === "Exact" ? true : false}
          label={item.subject}
        />
      </div>
    </div>
  );
};

export default QuestionItem;
