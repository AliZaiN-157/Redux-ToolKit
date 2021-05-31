import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Joe" },
      { id: 3, name: "Bob" },
      { id: 4, name: "King" },
      { id: 5, name: "Anonymous" },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;
