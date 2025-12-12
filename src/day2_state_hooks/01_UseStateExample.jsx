import { useState } from "react";

// function CounterExample() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="px-2">
//       <h2>Counter: {count}</h2>

//       {/* increment*/}
//       <button className="mx-2" onClick={() => setCount(count + 1)}>
//         Tambah (+1)
//       </button>

//       {/* decrement */}
//       <button className="mx-2" onClick={() => setCount(count - 1)}>
//         Kurang (-1)
//       </button>

//       {/* reset */}
//       <button className="mx-2" onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default CounterExample;

function FormExample() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = () => {
    alert(`Nama: ${name}, Umur: ${age}, Semester: ${semester}`);
  };

  return (
    <div>
      <h2>Form untuk menguji penggunaan use state pada form</h2>

      <div>
        <label>Nama: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukan Nama"
        />
      </div>

      <div>
        <label>Umur: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Masukan Umur"
        />
      </div>

      <div>
        <label>Semester: </label>
        <input
          type="number"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          placeholder="Masukan Semester"
        />
      </div>

      <button onClick={handleSubmit}>Kirim Form </button>
    </div>
  );
}

export default FormExample;
