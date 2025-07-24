import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = (op) => {
    let res;
    switch (op) {
      case "+":
        res = Number(num1) + Number(num2);
        break;
      case "-":
        res = Number(num1) - Number(num2);
        break;
      case "*":
        res = Number(num1) * Number(num2);
        break;
      case "/":
        res = num2 !== 0 ? Number(num1) / Number(num2) : "NaN";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8, maxWidth: 300 }}>
      <h2>계산기</h2>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <span style={{ margin: "0 8px" }}></span>
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <div style={{ margin: "12px 0" }}>
        <button onClick={() => handleCalculate("+")}>+</button>
        <button onClick={() => handleCalculate("-")}>-</button>
        <button onClick={() => handleCalculate("*")}>*</button>
        <button onClick={() => handleCalculate("/")}>/</button>
      </div>
      <div>결과: {result !== null ? result : "-"}</div>
    </div>
  );
}

export default Calculator;
