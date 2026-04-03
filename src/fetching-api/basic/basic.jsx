import { useEffect, useState } from "react";

export default function Basic() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Terjadi kesalahan saat mengambil data");
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Belajar Get API From JSONPlaceholder</h1>

      {loading && <p>Loading...</p>}

      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <hr />
        </div>
      ))}

      {error && <p>{error}</p>}
    </div>
  );
}
