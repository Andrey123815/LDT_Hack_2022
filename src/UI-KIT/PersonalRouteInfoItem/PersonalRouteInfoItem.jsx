import React, {useState} from 'react';
import './PersonalRouteInfoItem.scss';

function PersonalRouteInfoItem(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const activeItemColorStyle = {color: props.active ? '#FFFFFF' : '#000000'};

  return (
    <div className="personal-route-item"
         style={{
           borderBottom: `11px solid ${props.theme}`,
           background: props.active ? `${props.theme}` : isHovering ? '#F7EBE6' : '',
         }}
         onClick={props.onClick}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
    >
      <img src="/images/routeTypes/personal-routes.svg" alt="personal route preview"/>
      <div className="personal-route-item__route-info">
        <span style={activeItemColorStyle} className="route-info__title">
          {props.title}
        </span>
        <div className="route-info__params">
          <span style={activeItemColorStyle} className="params__duration">
          {props.duration} часов
        </span>
          <span style={activeItemColorStyle} className="params__distance">
          {props.distance} км
        </span>
        </div>
      </div>
      <img src={`/icons/right-arrow-${props.active ? 'white' : 'red'}.svg`} width="28px" height="28px" alt="right arrow"/>
    </div>
  );
}

export default PersonalRouteInfoItem;
