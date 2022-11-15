import React from 'react';
import './MapFilterBlock.scss';
import MapPointsFilterItem from "../../UI-KIT/MapPointsFilterItem/MapPointsFilterItem.jsx";
import {useDispatch} from "react-redux";
import {updateFilter} from "../../slices/placesSlice.js";

export const MAP_OBJECT_FILTERS = [
  'Туалеты', 'Зеленая зона', 'Парковка', 'Музей', 'Кафе', 'Мастерская', 'Пруд',
  'Развлечения', 'Спорт',  'Остановка', 'Прокат', 'Павильон', 'Ресторан', 'Фонтан',
  'Детская площадка', 'Стрит-фуд', 'Инфоцентр', 'Аттракцион', 'Читальня', 'Въезд', 'Вход',
  'Банкомат', 'Пикник', 'Храм', 'Билеты', 'Памятник', 'Такси',
  'Сувениры'
];

function MapFilterBlock() {
  const dispatch = useDispatch();

  const handle = (filter) => {
    dispatch(updateFilter(filter))
  }

  return (
    <div className="map-filter-block">
      {MAP_OBJECT_FILTERS.map(filter =>
        <MapPointsFilterItem key={filter} onClick={() => handle(filter)}>
          {filter}
        </MapPointsFilterItem>
      )}
    </div>
  );
}

export default MapFilterBlock;
