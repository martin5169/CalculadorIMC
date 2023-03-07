import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CalculatorContextProvider } from "./context/Calc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>
);
