import {createSlice} from '@reduxjs/toolkit'
import {fetchPlaces} from "../api/placesAPI.js";

const MAP_OBJECT_FILTERS = [
  'Туалеты', 'Зеленая зона', 'Парковка', 'Музей', 'Кафе', 'Мастерская',
  'Развлечения', 'Спорт', 'Прокат', 'Павильон', 'Ресторан', 'Пруд', 'Фонтан',
  'Остановка', 'Детская площадка', 'Стрит-фуд', 'Инфоцентр', 'Въезд', 'Читальня',
  'Такси', 'Вход', 'Пикник', 'Храм', 'Билеты', 'Памятник', 'Банкомат',
  'Аттракцион', 'Сувениры'
];

const initialState = {
  places: [],
  filters: Object.fromEntries(MAP_OBJECT_FILTERS.map(filter => [filter, false])),
  placesWithFilters: []
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    updateFilter(state, action) {
      const newFilters = Object.assign({}, state.filters);
      newFilters[action.payload] = !newFilters[action.payload];
      const activeFilters = Object.entries(newFilters).filter(([key, val]) => val).map(([key]) => key);

      state.filters = newFilters;

      if (activeFilters.length === 0) {
        state.placesWithFilters = state.places;
        return;
      }

      state.placesWithFilters =
        state.places.filter(({type, type_place}) =>
          activeFilters.includes(type || type_place)
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
