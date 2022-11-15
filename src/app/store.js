import {configureStore} from "@reduxjs/toolkit";
import placesReducer from '../slices/placesSlice.js';
import personalRoutesReducer from '../slices/personalRoutesSlice.js';
import questionnaireReducer from '../slices/questionnaireSlice.js';
import loyaltySystemReducer from '../slices/loyalitySlice.js';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    personalRoutes: personalRoutesReducer,
    questionnaire: questionnaireReducer,
    loyaltySystem: loyaltySystemReducer
  },
})
