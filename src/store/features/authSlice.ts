// authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiUsers from "../../api/apiUsers";
import { usersInitialStateInterface } from "../../types";

interface authInitialState {
  isDataAvailable: boolean,
  isLogged: boolean,
  isAdmin: boolean,
  currentUser: null,
  loading: boolean,
  error : null | string | undefined,
}

const initialState: authInitialState = {
  isDataAvailable: false,
  isLogged: false,
  isAdmin: false,
  currentUser: null,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await apiUsers();
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.isDataAvailable = true;
        state.currentUser = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.isDataAvailable = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
