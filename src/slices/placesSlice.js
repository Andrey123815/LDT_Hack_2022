import {createSlice} from '@reduxjs/toolkit'
import {fetchPlaces} from "../api/placesAPI.js";

const initialState = {
  places: [],
  filters: {},
  placesWithFilters: []
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    updateFilter(state, action) {
      console.log('updateFilter', action.payload);
      const newFilters = Object.assign({}, state.filters);
      newFilters[action.payload] = !newFilters[action.payload];
      const activeFilters = Object.entries(newFilters).map(([key, val]) => val && key);

      if (activeFilters.length === 0) {
        state.placesWithFilters = state.places;
        return;
      }

      console.log('activeFilters', activeFilters)
      state.placesWithFilters =
        state.places.filter(({type_place}) =>
          activeFilters.includes(type_place)
        );
    }
  },
  extraReducers: {
    [fetchPlaces.fulfilled]: (state, action) => {
      state.places = action.payload;
      state.placesWithFilters = action.payload;
    },
  }
})

export const { updateFilter } = placesSlice.actions

export default placesSlice.reducer
