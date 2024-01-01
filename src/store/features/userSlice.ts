import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types"

interface initialStateInterface {
  value : User[] | null
}

const initialState : initialStateInterface = {
  value: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers : {
      increment: state => {
        state.value?.push({username: "jaime"})
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
  }
})

export const storeFetchUsersAsync = (users) => (dispatch) => {
  dispatch(users)
}

export const selectUsers = (state:any) => state.User

export default userSlice.reducer
