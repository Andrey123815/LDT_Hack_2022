import React, {useState} from 'react';
import './ScreenWithMapTemplate.scss';
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import Map from "../../components/Map/Map.jsx";
import MapModeControlPanel from "../../components/MapModeControlPanel/MapModeControlPanel.jsx";
import MapScaleBar from "../../components/MapScaleBar/MapScaleBar.jsx";

function ScreenWithMapTemplate(props) {
  const [zoom, setZoom] = useState(14);
  return (
    <div className="screen-with-map">
      <MainHeader/>
      <MapModeControlPanel />
      <MapScaleBar
        scalePlus={() => setZoom(zoom + 1)}
        scaleMinus={() => setZoom(zoom - 1)}
      />
      <div className="screen-with-map__main-content">
        <div className="main-content__side-block">
          <header className="side-block__page-title">{props.title}</header>
          {props.children}
        </div>
        <div className="main-content__map">
          <Map places={props.places} routes={props.routes} statusRoutes={props.statusRoutes}/>
        </div>
      </div>
    </div>
  );
}

export default ScreenWithMapTemplate;
