import React, { useState, useEffect } from "react";
import "./SubjectBadge.css";

const SubjectBadge = ({ label, item }) => {
  const [bgColor, setBgColor] = useState("");
  const [labelColor, setLabelColor] = useState("");

  useEffect(() => {
    const defineBgColor = () => {
      if (item.subject === 1) setBgColor("rgba(245, 90, 11, 0.2)");
      else if (item.subject === 2) setBgColor("rgba(39, 56, 245, 0.2)");
      else if (item.subject === 3) setBgColor("rgba(39, 185, 90, 0.2)");
    };
    defineBgColor();
  }, [bgColor]);

  useEffect(() => {
    const defineLabelColor = () => {
      if (item.subject === 1) setLabelColor("rgba(245, 133, 39, 1)");
      else if (item.subject === 2) setLabelColor("rgba(39, 56, 245, 1)");
      else if (item.subject === 3) setLabelColor("rgba(39, 185, 90, 1)");
    };
    defineLabelColor();
  }, [labelColor]);

  return (
    <div
      className="badge-container"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="badge-content">
        <p
          className="headline"
          style={{
            color: labelColor,
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
