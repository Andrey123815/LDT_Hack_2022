import React from 'react';
import RouteTypeItem from "../../UI-KIT/RouteTypeItem/RouteTypeItem.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import './RouteTypeChoicePage.scss';

const ROUTE_TYPES = [
  {path: '/theme-routes.svg', description: 'Тематические маршруты'},
  {path: '/personal-routes.svg', description: 'Персональные маршруты'},
];

function RouteTypeChoicePage(props) {
  return (
    <div className="route-type-choice-page">
      <QuestionnaireHeaderIcon size='large' />
      <PageTitle>Выберите формат</PageTitle>
      <div className="route-type__items">
        {ROUTE_TYPES.map(({path, description}) =>
          <RouteTypeItem key={path} path={path} description={description} />
        )}
      </div>
    </div>
  );
}

export default RouteTypeChoicePage;
