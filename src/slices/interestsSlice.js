import { createSlice } from '@reduxjs/toolkit'
import {fetchInterests} from "../api/interestsAPI.js";

const initialState = {
  interests: 0,
}

export const interestsSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInterests.fulfilled]: (state, action) => {
      state.interests = action.payload;
    },
  }
})

export const { increment, decrement, incrementByAmount } = interestsSlice.actions

export default interestsSlice.reducer
