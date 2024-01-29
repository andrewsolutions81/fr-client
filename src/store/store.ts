//store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import userReducer from "./features/userSlice"

export default configureStore({
  reducer: {
    // homes: homesReducer,
    auth: authReducer,
    user: userReducer
  },
});
