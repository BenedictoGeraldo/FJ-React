// import { useState } from "react";

// function SimpleListExample() {
//   const fruits = ["apel", "tomat", "jambu", "alpukat"];

//   return (
//     <div>
//       <h2>Belajar List Rendering</h2>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SimpleListExample;

{
  /*Objek Array */
}

import { useState } from "react";

function StudentListExample() {
  const [students, setStudents] = useState([]);

  const [newName, setNewName] = useState("");
  const [newScore, setNewScore] = useState("");

  const addStudent = () => {
    if (newName.trim() && newScore) {
      const newStudent = {
        id: students.length + 1,
        name: newName,
        score: Number(newScore),
      };
      setStudents([...students, newStudent]); // ... di sebelah students digunakan untuk mengambil data array sebelumnya. kalau ini dihapus maka hanya name baru yang muncul sedangkan name lama akan menghilang.
      setNewName(""); // bagian ini digunakan untuk reset input form agar dapat diisi kembali dengan data baru
      setNewScore(""); // bagian ini digunakan untuk reset input form agar dapat diisi kembali dengan data baru=,
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }; //fungsi filter disini unntuk membuat array baru tanpa data yang difilter.

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, score: newScore } : student
      )
    );
  };

  return (
    <div>
      <h2> List Rendering: Array of Objects</h2>

      <div>
        <h3>Tambah Siswa baru</h3>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nama Siswa"
        />
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)} // (e) disini merupakan event object yang berfungsi sebagai penampung nilai dari input form
          placeholder="Nilai Siswa"
          min={0}
          max={100}
        />

        <button onClick={addStudent}>Tambah</button>
      </div>

      {/*Tabel Siswa */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Nilai</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  value={student.score}
                  onChange={(e) =>
                    updateScore(student.id, Number(e.target.value))
                  }
                  min={0}
                  max={100}
                />
              </td>
              <td>{student.score >= 75 ? "lulus" : "tidak lulus"}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*Empty State */}
      {students.length === 0 && <p>Tidak ada data siswa</p>}

      {/*Summary */}
      <div>
        <strong>Ringkasan:</strong>
        <p>Total Siswa: {students.length}</p>
        <p>Siswa Lulus: {students.filter((s) => s.score >= 75).length} </p>

        <p>Siswa Tidak Lulus: {students.filter((s) => s.score < 75).length}</p>
      </div>
    </div>
  );
}

export default StudentListExample;
