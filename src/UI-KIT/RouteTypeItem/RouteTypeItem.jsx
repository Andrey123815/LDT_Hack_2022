import React from 'react';
import './RouteTypeItem.scss';
import RouteTypeIcon from "../RouteTypeIcon/RouteTypeIcon.jsx";

function RouteTypeItem(props) {
  return (
    <div className="format-type-item">
      <div className="format-type-item__info">
        <RouteTypeIcon img={props.path} alt={props.description} />
        <div className="format-type-item__description">{props.description}</div>
      </div>
      <img className="format-type-item__arrow" src="/right-arrow.svg" alt="Right arrow" />
    </div>
  );
}

export default RouteTypeItem;
