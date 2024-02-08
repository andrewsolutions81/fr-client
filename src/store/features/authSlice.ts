// authSlice.ts
import { createSlice, createAsyncThunk ,createAction} from "@reduxjs/toolkit";
import { apiSignup, apiLogin } from "../../api/apiAuth";
import { signupInput, loginInput } from "../../types";

interface User {
  createdAt: string;
  email: string;
  favorite_homes: any[];
  id: string;
  is_admin: boolean;
  phone_number: string;
  updatedAt: string;
  username: string;
}
export interface authInitialState {
  isDataAvailable: boolean;
  isLogged: boolean;
  isAdmin: boolean;
  currentUser: null | User;
  loading: boolean;
  error: null | string | undefined;
}

// async actions
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData: signupInput) => {
    const response = await apiSignup(userData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: loginInput) => {
    const response = await apiLogin(credentials);
    return response.data;
  }
);

// actions
export const setUser = createAction("auth/setUser", (payload: User) => {
  return {
    payload,
  };
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isDataAvailable: false,
    isLogged: false,
    isAdmin: false,
    currentUser: null,
    loading: false,
    error: null,
  } as authInitialState,
  reducers: {
    setUser: (state, action) => {
      state.isDataAvailable = true;
      state.isLogged = true;
      state.isAdmin = action.payload.is_admin;
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.isDataAvailable = false;
      state.isLogged = false;
      state.isAdmin = false;
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isDataAvailable = true;
        state.currentUser = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.isDataAvailable = false;
        state.error = action.error.message;
      });
    // login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLogged = false;
        state.error = action.error.message;
      });
    // logout
      builder.addCase(logoutUser, (state) => {
      state.isDataAvailable = false;
      state.isLogged = false;
      state.isAdmin = false;
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
