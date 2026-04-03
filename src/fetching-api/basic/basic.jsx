import { useEffect, useState } from "react";

export default function Basic() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Belajar Get API From JSONPlaceholder</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}
