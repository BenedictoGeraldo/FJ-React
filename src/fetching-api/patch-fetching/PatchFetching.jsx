import { useState, useEffect } from "react";

export default function PatchFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Terjadi kesalahan saat mengambil data");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdate = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Judul sudah diubah ni kak",
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        setPosts((prev) =>
          prev.map((post) =>
            post.id === id ? { ...post, ...updatedPost } : post,
          ),
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Belajar Edit data dengan Patch</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <h4>{post.body}</h4>

          <button onClick={() => handleUpdate(post.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
