import { createSlice } from '@reduxjs/toolkit'
import {fetchPersonalRoutes} from "../api/personalRoutesAPI.js";

const initialState = {
  personalRoutes: [],
}

export const personalRoutesSlice = createSlice({
  name: 'personalRoutes',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPersonalRoutes.fulfilled]: (state, action) => {
      state.personalRoutes = action.payload;
    },
  }
})

// export const { increment, decrement, incrementByAmount } = placesSlice.actions

export default personalRoutesSlice.reducer
