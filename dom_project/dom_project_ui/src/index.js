import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
