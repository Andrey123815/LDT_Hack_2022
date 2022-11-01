import {configureStore} from "@reduxjs/toolkit";
import interestsReducer from '../slices/interestsSlice.js';
import placesReducer from '../slices/placesSlice.js';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    // interests: interestsReducer,
  },
})
