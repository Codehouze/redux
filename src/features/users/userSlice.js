import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Emmanuel Maxwell ",
  },
  {
    id: "1",
    name: "Dude Lebowski",
  },

  {
    id: "2",
    name: "Dave Grey",
  },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
