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
    error: null,
  },
  reducers: {
    likeButtonClicked: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.postId === action.payload
      );

      state.posts[postIndex].likes += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "Success";
      state.posts = action.payload.posts;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.payload.message;
    });
  },
});

export const { likeButtonClicked } = postSlice.actions;
export default postSlice.reducer;
