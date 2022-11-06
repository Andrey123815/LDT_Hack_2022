import React, {useState} from 'react';
import './MapScaleBar.scss';

function MapScaleBar(props) {

  const [isHoveringFirst, setIsHoveringFirst] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);

  const handleMouseEnter = (idx) => {
    if (idx === 2) {
      return setIsHoveringSecond(true);
    }
    setIsHoveringFirst(true);
  };

  const handleMouseLeave = (idx) => {
    if (idx === 2) {
      return setIsHoveringSecond(false);
    }
    setIsHoveringFirst(false);
  };

  return (
    <div className="map-scale-bar">
      <img
        // onClick={props.scalePlus}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
        src={`/icons/scale-plus-${isHoveringFirst ? 'red' : 'white'}.svg`}
        alt="+scale"
      />
      <img
        // onClick={props.scaleMinus}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
        src={`/icons/scale-minus-${isHoveringSecond ? 'red' : 'white'}.svg`}
        alt="-scale"
      />
    </div>
  );
}

export default MapScaleBar;
