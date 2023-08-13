import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "'I've heard good things about redux and i choose to learn about it.",
  },
  {
    id: "1",
    title: "Slices helps you store the state in the redux store",
    content: "Practice makes perfect",
  },

  {
    id: "3",
    title: "Slices.......",
    content: "the more i say slice, the more i want pizza.....",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
