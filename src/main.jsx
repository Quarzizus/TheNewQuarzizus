import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./styles/Normalize.scss";

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
