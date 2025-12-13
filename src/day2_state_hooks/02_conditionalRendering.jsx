{
  /*Conditional Rendering With IF/ELSE */
}

import { useState } from "react";

function IfElseExample() {
  const [status, setStatus] = useState("idle");

  if (status === "Loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  if (status === "success") {
    return <div>Success</div>;
  }

  return (
    <div>
      <h2>Belajar Conditional Rendering dengan metode If Else</h2>
      <button onClick={() => setStatus("idle")}>Reset </button>
      <br />
      <button onClick={() => setStatus("Loading")}> Set Loading </button>
      <br />
      <button onClick={() => setStatus("success")}> Set Success </button>
      <br />
      <button onClick={() => setStatus("error")}> Set Error </button>
    </div>
  );
}

export default IfElseExample;

{
  /*Conditional Rendering With IF/ELSE */
}

{
  /*Conditional Rendering With IF/ELSE */
}

{
  /*Conditional Rendering With IF/ELSE */
}
