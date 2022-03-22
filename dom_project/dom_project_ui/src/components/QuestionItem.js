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
        <div style={{ margin: "auto 32px auto auto" }}>
          {item.reviewed === true ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.1484 9.46875L15 26.6172L7.85156 19.4688C7.51302 19.1562 7.10938 19 6.64062 19C6.19792 19 5.82031 19.1562 5.50781 19.4688C5.16927 19.8073 5 20.2109 5 20.6797C5 21.1224 5.16927 21.5 5.50781 21.8125L13.8281 30.1719C14.1406 30.4844 14.5312 30.6406 15 30.6406C15.4688 30.6406 15.8594 30.4844 16.1719 30.1719L34.4922 11.8125C34.8307 11.5 35 11.1224 35 10.6797C35 10.2109 34.8307 9.80729 34.4922 9.46875C34.1797 9.15625 33.7891 9 33.3203 9C32.8776 9 32.487 9.15625 32.1484 9.46875Z"
                fill="green"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.6087 9.37688L17.1906 19.9765L6.6087 30.5762C6.2029 30.9827 6 31.4673 6 32.0302C6 32.5617 6.2029 33.0151 6.6087 33.3903C6.98328 33.7968 7.4515 34 8.01338 34C8.57525 34 9.04348 33.7968 9.41806 33.3903L20 22.8375L30.5819 33.3903C30.9565 33.7968 31.4247 34 31.9866 34C32.5485 34 33.0167 33.7968 33.3913 33.3903C33.7971 33.0151 34 32.5617 34 32.0302C34 31.4673 33.7971 30.9827 33.3913 30.5762L22.8094 19.9765L33.3913 9.37688C33.7971 9.00168 34 8.5483 34 8.01675C34 7.45394 33.7971 6.96929 33.3913 6.56281C33.0167 6.1876 32.5485 6 31.9866 6C31.4247 6 30.9565 6.1876 30.5819 6.56281L20 17.1625L9.41806 6.56281C9.04348 6.1876 8.57525 6 8.01338 6C7.4515 6 6.98328 6.1876 6.6087 6.56281C6.2029 6.96929 6 7.45394 6 8.01675C6 8.5483 6.2029 9.00168 6.6087 9.37688Z"
                fill="red"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
