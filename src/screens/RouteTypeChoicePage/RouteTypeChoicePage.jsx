import React from 'react';
import RouteTypeItem from "../../UI-KIT/RouteTypeItem/RouteTypeItem.jsx";

const ROUTE_TYPES = [
  {path: '/theme-routes.svg', description: 'Тематические маршруты'},
  {path: '/personal-routes.svg', description: 'Персональные маршруты'},
];

function RouteTypeChoicePage(props) {
  return (
    <div>
      {ROUTE_TYPES.map(({path, description}) =>
        <RouteTypeItem path={path} description={description} />
      )}
    </div>
  );
}

export default RouteTypeChoicePage;
