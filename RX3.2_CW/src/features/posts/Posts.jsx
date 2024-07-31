import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch()}>{post.likes} Likes</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
