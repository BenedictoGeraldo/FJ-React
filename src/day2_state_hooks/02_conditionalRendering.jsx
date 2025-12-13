// Conditional Rendering With IF/ELSE

import { useState } from "react";

function IfElseExample() {
  //   const [status, setStatus] = useState("idle");
  //   if (status === "Loading") {
  //     return <div>Loading...</div>;
  //   }
  //   if (status === "error") {
  //     return <div>Error...</div>;
  //   }
  //   if (status === "success") {
  //     return <div>Success</div>;
  //   }
  //   return (
  //     <div>
  //       <h2>Belajar Conditional Rendering dengan metode If Else</h2>
  //       <button onClick={() => setStatus("idle")}>Reset </button>
  //       <br />
  //       <button onClick={() => setStatus("Loading")}> Set Loading </button>
  //       <br />
  //       <button onClick={() => setStatus("success")}> Set Success </button>
  //       <br />
  //       <button onClick={() => setStatus("error")}> Set Error </button>
  //     </div>
  //   );

  const [score, setScore] = useState(0);

  let grade = "";
  let color = "gray";

  if (score >= 90) {
    grade = "A";
    color = "green";
  } else if (score >= 80) {
    grade = "B";
    color = "goldenrod";
  } else if (score >= 70) {
    grade = "C";
    color = "blue";
  } else if (score > 0) {
    grade = "D";
    color = "red";
  }

  return (
    <div>
      <h2>Conditional Rendering: If/Else Method</h2>
      <h3>Your Score: {score}</h3>
      <h3 style={{ color }}>Grade: {grade}</h3>

      <input
        type="number"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        placeholder="Put Your Grade"
        min={0}
        max={100}
      />
    </div>
  );
}

export default IfElseExample;

{
  /* Conditional Rendering with Ternary Operator */
}
