// userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiUsers from '../../api/apiUsers';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await apiUsers();
    return response.data;
  }
);

const initialState = {
  users: [],
  isDataAvailable: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDataAvailable = true;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isDataAvailable = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
