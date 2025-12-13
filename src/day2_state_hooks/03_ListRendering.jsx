// import { useState } from "react";

function SimpleListExample() {
  const fruits = ["apel", "tomat", "jambu", "alpukat"];

  return (
    <div>
      <h2>Belajar List Rendering</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleListExample;
