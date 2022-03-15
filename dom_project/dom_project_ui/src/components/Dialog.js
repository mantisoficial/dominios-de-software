import React from "react";
import "./Dialog.css";
import Button from "./Button";

const Dialog = ({
  name,
  isOpen,
  placeholder,
  value,
  onChange,
  onCancel,
  onSave,
}) => {
  const subjectOptions = [
    {
      name: "Matemática",
      value: "A",
    },
    {
      name: "História",
      value: "B",
    },
    {
      name: "Física",
      value: "C",
    },
    {
      name: "Geografia",
      value: "D",
    },
  ];

  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p className="subheader">Nova questão</p>
        </div>
        <div className="dialog-body">
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                {" "}
                Código:{" "}
              </p>
            </div>
            <input
              name={name}
              className="text-input"
              type="text"
              placeholder={placeholder ?? null}
              onChange={onChange}
              value={value}
              autoComplete="off"
              maxLength={4}
              style={{ width: "40px" }}
            ></input>
          </div>
          <div className="input-row" style={{ display: "block" }}>
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                {" "}
                Questão:{" "}
              </p>
            </div>
            <input
              name={name}
              className="text-input"
              type="text"
              placeholder={placeholder ?? null}
              onChange={onChange}
              value={value}
              autoComplete="off"
              style={{ width: "250px", height: "30px" }}
            ></input>
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 0px 0px" }}>
                {" "}
                Matéria:{" "}
              </p>
            </div>
            <select
              name={name}
              className="text-input"
              placeholder={placeholder ?? null}
              onChange={onChange}
              value={value}
            >
              {subjectOptions.map((item, index) => {
                return <option value={item.value}>{item.name}</option>;
              })}
            </select>
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 0px 0px" }}>
                {" "}
                Revisado:{" "}
              </p>
            </div>
            <input
              name={name}
              className="text-input"
              type="checkbox"
              onChange={onChange}
              value={value}
            ></input>
          </div>
        </div>
        <div className="dialog-footer">
          <Button
            label="Salvar"
            onClick={onSave}
            buttonMargin={"0px 8px 0px 0px"}
          />
          <Button label="Cancelar" isDestructive onClick={onCancel} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
