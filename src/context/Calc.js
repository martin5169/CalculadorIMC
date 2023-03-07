import React, { createContext } from "react";

export const Calculator = createContext();

export function CalculatorContextProvider(props) {
  function calculate(h, w) {
    let calc = (w / Math.pow(h / 100, 2)).toFixed(1);

    return calc;
  }

  return (
    <Calculator.Provider
      value={{
        calculate,
      }}
    >
      {props.children}
    </Calculator.Provider>
  );
}
