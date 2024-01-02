import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'
import userReducer from "./features/userSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    // homes: homesReducer,
    // auth: authReducer,
    user: userReducer
  },
});
