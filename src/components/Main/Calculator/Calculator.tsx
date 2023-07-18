import React, { useState } from "react";
import "./Calculator.css";
import { SoldeButton } from "../../Buttons/Buttons";

interface CalculatorProps {
  onSoldeButtonClick: (result: string) => void;
}

interface CalculatorState {
  result: string;
}

const Calculator: React.FC<CalculatorProps> = ({ onSoldeButtonClick }) => {
  const [result, setResult] = useState("0");

  const handleClick = (value: string) => {
    if (result === "0") {
      setResult(value);
    } else {
      setResult((prevResult) => prevResult + value);
    }
  };

  const handleClear = () => {
    setResult("0");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(String(calculatedResult));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleSoldeButtonClick = () => {
    handleCalculate();
    onSoldeButtonClick(result);
  };

  return (
    <div className="calculator">
      <div className="result-box">{result}</div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="number-button" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="number-button" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="operation-button" onClick={() => handleClick("/")}>
          ÷
        </button>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="number-button" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="number-button" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="operation-button" onClick={() => handleClick("*")}>
          ×
        </button>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="number-button" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="number-button" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="operation-button" onClick={() => handleClick("-")}>
          -
        </button>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="number-button" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="clear-button" onClick={handleClear}>
          C
        </button>
        <button className="operation-button" onClick={() => handleClick("+")}>
          +
        </button>
      </div>
      <div className="button-row">
        <button className="calculate-button" onClick={handleSoldeButtonClick}>
          <SoldeButton />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
