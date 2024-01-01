/* store/index.ts */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from ""
import userReducer from ''

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})

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
