import React from 'react';
import './MapFilterBlock.scss';
import MapPointsFilterItem from "../../UI-KIT/MapPointsFilterItem/MapPointsFilterItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {updateFilter} from "../../slices/placesSlice.js";

export const MAP_OBJECT_FILTERS = [
  'Туалеты', 'Зеленая зона', 'Парковка', 'Музей', 'Кафе', 'Мастерская',
  'Развлечения', 'Спорт', 'Прокат', 'Павильон', 'Ресторан', 'Пруд', 'Фонтан',
  'Остановка', 'Детская площадка', 'Стрит-фуд', 'Инфоцентр', 'Въезд', 'Читальня',
  'Такси', 'Вход', 'Пикник', 'Храм', 'Билеты', 'Памятник', 'Банкомат',
  'Аттракцион', 'Сувениры'
];

function MapFilterBlock() {
  const dispatch = useDispatch();
  const pointsWithFilters = useSelector(state => state.places.placesWithFilters)

  // const [state, setState] = useState(initState);
  return (
    <div className="map-filter-block">
      {MAP_OBJECT_FILTERS.map(filter =>
        <MapPointsFilterItem onClick={dispatch(updateFilter(filter))}>
          {filter}
        </MapPointsFilterItem>
      )}
    </div>
  );
}

export default MapFilterBlock;
