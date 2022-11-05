import React from 'react';
import './ScreenWithMapTemplate.scss';
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import Map from "../../components/Map/Map.jsx";
import MapModeControlPanel from "../../components/MapModeControlPanel/MapModeControlPanel.jsx";

function ScreenWithMapTemplate(props) {
  return (
    <div className="screen-with-map">
      <MainHeader/>
      <MapModeControlPanel />
      <div className="screen-with-map__main-content">
        <div className="main-content__side-block">
          <header className="side-block__page-title">{props.title}</header>
          {props.children}
        </div>
        <div className="main-content__map">
          <Map places={props.places} routes={props.routes}/>
        </div>
      </div>
    </div>
  );
}

export default ScreenWithMapTemplate;
