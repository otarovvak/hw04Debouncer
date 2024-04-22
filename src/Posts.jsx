import { Post } from "./Post";
import { useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Fisrt",
    },
    {
      id: 2,
      title: "Second",
    },
  ]);
  return (
    <>
      {posts.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          remove={(id) => {
            setPosts(posts.filter(item => item.id !== id))
          }}
        ></Post>
      ))}
    </>
  );
};
