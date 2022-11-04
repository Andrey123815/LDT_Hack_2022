import React from 'react';
import './PersonalRouteInfoItem.scss';

function PersonalRouteInfoItem(props) {
  return (
    <div className="personal-route-item">
      <img src="/images/routeTypes/personal-routes.svg" alt="personal route preview" />
      <div className="personal-route-item__route-info">
        <span className="route-info__title">
          {props.title}
        </span>
        <span className="route-info__duration">
          {props.duration}
        </span>
        <span className="route-info__distance">
          {props.distance}
        </span>
      </div>
      <img src="/icons/right-arrow.svg" alt="right arrow" />
    </div>
  );
}

export default PersonalRouteInfoItem;
