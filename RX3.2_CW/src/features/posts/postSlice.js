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
