import { createSlice } from '@reduxjs/toolkit'
import {fetchPlaces} from "../api/placesAPI.js";

const initialState = {
  interests: 0,
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlaces.fulfilled]: (state, action) => {
      state.interests = action.payload;
    },
  }
})

export const { increment, decrement, incrementByAmount } = placesSlice.actions

export default placesSlice.reducer
