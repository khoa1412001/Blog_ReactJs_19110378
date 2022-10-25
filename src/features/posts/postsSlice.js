import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "0",
    title: "19110378 Banh Dang Khoa",
    content: "Blog with Reactjs",
    comment: [
      { id: "0", author: "Khoa", comment: "Blog duoc viet bang reactjs" },
    ],
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postEdit(state, action) {
      let index = state.findIndex((post) => post.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].content = action.payload.content;
    },
    commentAdded(state, action) {
      let index = state.findIndex((post) => post.id === action.payload.id);
      state[index].comment.push(action.payload.data);
    },
    postDeleted(state, action) {
      let index = state.findIndex((post) => post.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, postEdit, commentAdded, postDeleted } =
  postsSlice.actions;

export default postsSlice.reducer;
