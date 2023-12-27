/* store/index.ts */
import { configureStore } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { AppState } from "../types"

const storeInitialState :AppState = {
  Users: [],
  Homes: [],
  currentUser: null,
  auth: {
    isLoggedIn: false,
    isAdmin: false,
  },
  errorClientDisplay: null,
  countForLearning:0,
};

// create store
const store = configureStore({
  reducer: {
    app: storeInitialState,
  },
});

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');

export default store;
