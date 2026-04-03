import { useEffect, useState } from "react";

export default function PostFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        title: title,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prev) => [...prev, data]);

        setTitle("");
        setBody("");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <h1>Belajar POST dengan fetching bawaan js</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap flex-col p-5 w-2/3"
      >
        <input
          type="text"
          placeholder="Masukan Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black/40 rounded-md my-2"
          required
        />

        <textarea
          placeholder="Masukan Sinopsis"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border border-black/40 rounded-md my-2"
          required
        />

        <button
          type="submit"
          className="border rounded-md border-black/80 my-2 hover:bg-green-100/50 transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Kirim Form"}
        </button>
      </form>

      <hr className="border-black mx-20" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}
