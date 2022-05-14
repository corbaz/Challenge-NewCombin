import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./index.css";

//Importación del CSS y Tailwind
import "./Tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
