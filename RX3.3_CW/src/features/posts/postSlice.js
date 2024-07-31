import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://social-media-cw-server-student-neog.replit.app/posts"
  );

  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
  },
  reducers: {
    likeButtonClicked: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.postId === action.payload
      );

      state.posts[postIndex].likes += 1;
    },
  },
});

export const { likeButtonClicked } = postSlice.actions;
export default postSlice.reducer;
