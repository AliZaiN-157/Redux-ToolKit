import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users", async () => {
  // users/pending
  // users/fullfilled
  // users/rejected

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

// Promises
// pending
// fulfilled
// rejected
