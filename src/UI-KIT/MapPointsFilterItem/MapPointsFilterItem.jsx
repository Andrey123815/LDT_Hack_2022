import React from 'react';
import './MapPointsFilterItem.scss';

function MapPointsFilterItem(props) {
  return (
    <div className={`map-filter-item_${props.active || 'passive'}`}>
      {props.children}
    </div>
  );
}

export default MapPointsFilterItem;
