{
  /* Fetch Data Real World */
}

import { useState, useEffect } from "react";

function LearntToFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default LearntToFetch;

{
  /* Document title */
}
// import { useState, useEffect } from "react";

// function DocumentTitle() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>

//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   );
// }

// export default DocumentTitle;
