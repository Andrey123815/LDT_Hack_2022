import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  phoneNumber: ''
}

export const loyaltySlice = createSlice({
  name: 'loyaltySystem',
  initialState,
  reducers: {
    auth(state, action) {
      state.isAuth = true;
      state.phoneNumber = action.payload;
    }
  },
})

export const { auth } = loyaltySlice.actions

export default loyaltySlice.reducer
