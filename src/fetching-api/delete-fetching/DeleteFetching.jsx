import { useState, useEffect } from "react";

export default function DeleteFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Terjadi kesalahan saat mengambil data");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Belajar Fetching Data dengan Method Delete</h1>

      {error && <p>{error}</p>}
      {loading && <p>Loading..</p>}

      {posts.map((post) => (
        <div key={post.id} className="my-3">
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>

          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
