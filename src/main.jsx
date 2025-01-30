import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MiContenedor } from "./context/TaskContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MiContenedor>
      <App />
    </MiContenedor>
  </StrictMode>
);
