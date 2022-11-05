import React from 'react';
import './MapFilterBlock.scss';
import MapPointsFilterItem from "../../UI-KIT/MapPointsFilterItem/MapPointsFilterItem.jsx";

function MapFilterBlock(props) {
  return (
    <div className="map-filter-block">
      {props.items.map(filter =>
        <MapPointsFilterItem active={true}>
          {filter}
        </MapPointsFilterItem>
      )}
    </div>
  );
}

export default MapFilterBlock;
