import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonShowcase } from "./showcase/ButtonShowcase";
import "./tokens.css";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="app-container">
      <h1>Enterprise Design System</h1>
      <p>Reusable components for enterprise applications.</p>

      <ButtonShowcase />
    </main>
  </React.StrictMode>
);