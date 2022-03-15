import React from "react";
import "./SubjectBadge.css";

const SubjectBadge = ({ label, isExactScience }) => {
  return (
    <div
      className="badge-container"
      style={{
        backgroundColor: isExactScience
          ? "rgba(245, 90, 11, 0.2)"
          : "rgba(39, 56, 245, 0.2)",
      }}
    >
      <div className="badge-content">
        <p
          className="headline"
          style={{
            color: isExactScience
              ? "rgba(245, 133, 39, 1)"
              : "rgba(39, 56, 245, 1)",
            fontWeight: "600",
            margin: "0px",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default SubjectBadge;
