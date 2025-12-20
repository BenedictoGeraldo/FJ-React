import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}`);
  };

  return (
    <div>
      <h1> Ini adalah Simpel Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukan Nama"
          ></input>
        </label>

        <button type="submit">Submit</button>
      </form>
      <p>Nama kamu {name}</p>
    </div>
  );
}
export default SimpleForm;
