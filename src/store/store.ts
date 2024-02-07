//store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import userReducer from "./features/userSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
