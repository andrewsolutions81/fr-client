//store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/userSlice"

export default configureStore({
  reducer: {
    // homes: homesReducer,
    // auth: authReducer,
    user: userReducer
  },
});
