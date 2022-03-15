import React from "react";
import "./Button.css";

const button = ({ label, onClick, isDestructive, buttonMargin }) => {
  return (
    <button
      className={isDestructive ? "button destructive" : "button standard"}
      onClick={onClick}
      style={{margin: buttonMargin}}
    >
      <div style={{margin: "auto 0px"}}>
        <p className="body" style={{color: "black", fontWeight: "300"}}>{label}</p>
      </div>
    </button>
  );
};

export default button;
