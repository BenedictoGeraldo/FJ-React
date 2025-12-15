{
  /* Fetch Data Real World */
}

{
  /* Document title */
}
import { useState, useEffect } from "react";

function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default DocumentTitle;
