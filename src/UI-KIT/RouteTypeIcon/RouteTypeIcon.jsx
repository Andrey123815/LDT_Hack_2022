import React from 'react';

function RouteTypeIcon(props) {
  return (
    <div className="route-type-icon_blob">
      <img className="icon__image" src={props.img} alt={props.alt}/>
    </div>
  );
}

export default RouteTypeIcon;
