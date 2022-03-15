import React from "react";
import "./Dialog.css";

const Dialog = ({ isOpen }) => {
  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p>Teste</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
