import React, {useState} from 'react';
import './MapPointsFilterItem.scss';

function MapPointsFilterItem(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`map-filter-item_${props.active ? 'active' : 'passive'}`}
      onClick={() => {setActive(!active); props.onClick()}}
    >
      {props.children}
    </div>
  );
}

export default MapPointsFilterItem;
