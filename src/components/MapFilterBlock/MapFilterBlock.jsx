import React from 'react';
import './MapFilterBlock.scss';

function MapFilterBlock(props) {
  return (
    <div className="map-filter-block">
      {props.items}
    </div>
  );
}

export default MapFilterBlock;
