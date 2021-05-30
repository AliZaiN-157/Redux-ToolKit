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
});

export default usersReducer.reducer;
