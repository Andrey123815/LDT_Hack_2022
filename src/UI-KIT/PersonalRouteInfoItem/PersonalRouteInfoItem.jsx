import React from 'react';
import './PersonalRouteInfoItem.scss';

function PersonalRouteInfoItem(props) {
  return (
    <div className="personal-route-item" style={{borderBottom: `11px solid ${props.theme}`}}>
      <img src="/images/routeTypes/personal-routes.svg" alt="personal route preview" />
      <div className="personal-route-item__route-info">
        <span className="route-info__title">
          {props.title}
        </span>
        <div className="route-info__params">
          <span className="params__duration">
          {props.duration} часа
        </span>
        <span className="params__distance">
          {props.distance} км
        </span>
        </div>
      </div>
      <img src="/icons/right-arrow.svg" alt="right arrow" />
    </div>
  );
}

export default PersonalRouteInfoItem;
