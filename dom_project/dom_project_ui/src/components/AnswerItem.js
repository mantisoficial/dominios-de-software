import React from "react";
import "./AnswerItem.css";

const AnswerItem = ({ item, counter }) => {
  return (
    <div className="answer-item-container">
      <div
        className={`answer-item-content ${item.isCorrect ? "isCorrect" : ""}`}
      >
        <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
          {counter})
        </p>
        <p className="body" style={{ margin: "0px" }}>
          {item.text}
        </p>
        {item.isCorrect ? (
          <div style={{ margin: "auto 0px auto auto" }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0742 4.73438L7.5 13.3086L3.92578 9.73438C3.75651 9.57812 3.55469 9.5 3.32031 9.5C3.09896 9.5 2.91016 9.57812 2.75391 9.73438C2.58464 9.90365 2.5 10.1055 2.5 10.3398C2.5 10.5612 2.58464 10.75 2.75391 10.9062L6.91406 15.0859C7.07031 15.2422 7.26562 15.3203 7.5 15.3203C7.73438 15.3203 7.92969 15.2422 8.08594 15.0859L17.2461 5.90625C17.4154 5.75 17.5 5.5612 17.5 5.33984C17.5 5.10547 17.4154 4.90365 17.2461 4.73438C17.0898 4.57812 16.8945 4.5 16.6602 4.5C16.4388 4.5 16.2435 4.57812 16.0742 4.73438Z"
                fill="#00B2BF"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AnswerItem;
