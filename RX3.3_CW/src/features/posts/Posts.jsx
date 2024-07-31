import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, likeButtonClicked } from "./postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {status === "Loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch(likeButtonClicked(post.postId))}>
            {post.likes} Likes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
