import { useState } from "react";
import "./Calculator.css";


function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (type) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (type) {
      case "add":
        setResult(a + b);
        break;
      case "sub":
        setResult(a - b);
        break;
      case "mul":
        setResult(a * b);
        break;
      case "div":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Error");
    }
  };

  return (
  <div className="wrapper">
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={() => calculate("add")}>Add</button>
        <button onClick={() => calculate("sub")}>Subtract</button>
        <button onClick={() => calculate("mul")}>Multiply</button>
        <button onClick={() => calculate("div")}>Divide</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  </div>
);
}

export default Calculator;
