import React from 'react';
import './FreeModeRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import NewLocationOffer from "../../components/NewLocationOffer/NewLocationOffer.jsx";
import MapFilterBlock from "../../components/MapFilterBlock/MapFilterBlock.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";

const MAP_OBJECT_FILTERS = [
  'Еда', 'Зеленая зона', 'Павильон', 'Спорт', 'Фонтан', 'Инфоцентр', 'Пруд',
  'Пикник', 'Музей', 'Парковка', 'Остановка', 'Вход', 'Туалеты', 'Детская площадка',
  'Памятник', 'Мастерская','Такси', 'Читальня', 'Въезд', 'Банкомат', 'Сувениры',
  'Храм', 'Билеты'
];

function FreeModeRoutes(props) {
  return (
    <>
      <ScreenWithMapTemplate title="Выберите, что вас интересует">
        <MapFilterBlock items={MAP_OBJECT_FILTERS}/>
        <InviteToLoyaltyProgram />
        <NewLocationOffer />
      </ScreenWithMapTemplate>
    </>
  );
}

export default FreeModeRoutes;
