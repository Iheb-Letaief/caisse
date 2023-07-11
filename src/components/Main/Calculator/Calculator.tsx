import React from "react";
import "./Calculator.css";

interface CalculatorState {
  result: string;
}

class Calculator extends React.Component<{}, CalculatorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      result: "0",
    };
  }

  handleClick = (value: string) => {
    if (this.state.result === "0") {
      this.setState({ result: value });
    } else {
      this.setState((prevState) => ({ result: prevState.result + value }));
    }
  };

  handleClear = () => {
    this.setState({ result: "0" });
  };

  handleCalculate = () => {
    try {
      const calculatedResult = eval(this.state.result);
      this.setState({ result: String(calculatedResult) });
    } catch (error) {
      this.setState({ result: "Error" });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="result-box">{this.state.result}</div>
        <div className="button-row">
          <button
            className="number-button"
            onClick={() => this.handleClick("7")}
          >
            7
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("8")}
          >
            8
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("9")}
          >
            9
          </button>
          <button
            className="operation-button"
            onClick={() => this.handleClick("/")}
          >
            ÷
          </button>
        </div>
        <div className="button-row">
          <button
            className="number-button"
            onClick={() => this.handleClick("4")}
          >
            4
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("5")}
          >
            5
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("6")}
          >
            6
          </button>
          <button
            className="operation-button"
            onClick={() => this.handleClick("*")}
          >
            ×
          </button>
        </div>
        <div className="button-row">
          <button
            className="number-button"
            onClick={() => this.handleClick("1")}
          >
            1
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("2")}
          >
            2
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick("3")}
          >
            3
          </button>
          <button
            className="operation-button"
            onClick={() => this.handleClick("-")}
          >
            -
          </button>
        </div>
        <div className="button-row">
          <button
            className="number-button"
            onClick={() => this.handleClick("0")}
          >
            0
          </button>
          <button
            className="number-button"
            onClick={() => this.handleClick(".")}
          >
            .
          </button>
          <button className="clear-button" onClick={this.handleClear}>
            C
          </button>
          <button
            className="operation-button"
            onClick={() => this.handleClick("+")}
          >
            +
          </button>
        </div>
        <div className="button-row">
          <button className="calculate-button" onClick={this.handleCalculate}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
