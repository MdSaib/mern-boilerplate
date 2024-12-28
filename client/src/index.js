import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import global styles
import MainRouter from "./MainRouter";

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById("root") // Mounting point from public/index.html
);
