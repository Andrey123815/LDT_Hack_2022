import { createSlice } from '@reduxjs/toolkit'
import {fetchPlaces} from "../api/placesAPI.js";

const initialState = {
  places: [],
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlaces.fulfilled]: (state, action) => {
      state.places = action.payload.map(place => {place.coordinates?.reverse(); return place});
    },
  }
})

// export const { increment, decrement, incrementByAmount } = placesSlice.actions

export default placesSlice.reducer
