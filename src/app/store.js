import {configureStore} from "@reduxjs/toolkit";
import interestsReducer from '../slices/interestsSlice.js';
import placesReducer from '../slices/placesSlice.js';
import personalRoutesReducer from '../slices/personalRoutesSlice.js';
import questionnaireReducer from '../slices/questionnaireSlice.js';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    interests: interestsReducer,
    personalRoutes: personalRoutesReducer,
    questionnaire: questionnaireReducer,
  },
})
