import { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-2">
      <h2>Counter: {count}</h2>

      {/* increment*/}
      <button className="mx-2" onClick={() => setCount(count + 1)}>
        Tambah (+1)
      </button>

      {/* decrement */}
      <button className="mx-2" onClick={() => setCount(count - 1)}>
        Kurang (-1)
      </button>

      {/* reset */}
      <button className="mx-2" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterExample;
