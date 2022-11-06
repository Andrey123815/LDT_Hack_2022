import React, {useState} from 'react';
import './MapScaleBar.scss';

function MapScaleBar(props) {

  // const [isHovering, setIsHovering] = useState(false);
  //
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };
  //
  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  return (
    <div className="map-scale-bar">
      <img onClick={props.scalePlus} src="/icons/scale-plus-white.svg" alt="+scale" />
      <img onClick={props.scaleMinus} src="/icons/scale-minus-white.svg" alt="-scale" />
    </div>
  );
}

export default MapScaleBar;
