import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        postId: "post001",
        caption: "non",
        likes: 9,
        user: {
          userId: "non1",
          userName: "non001",
        },
      },
      {
        postId: "post002",
        caption: "non",
        likes: 9,
        user: {
          userId: "non2",
          userName: "non002",
        },
      },
    ],
  },
  reducers: {},
});

export default postSlice.reducer;
