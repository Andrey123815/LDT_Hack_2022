import React from 'react';
import './ScreenWithMapTemplate.scss';
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import Map from "../../components/Map/Map.jsx";
import MapModeControlPanel from "../../components/MapModeControlPanel/MapModeControlPanel.jsx";
import MapScaleBar from "../../components/MapScaleBar/MapScaleBar.jsx";
import PageSelectSwitcher from "../../components/PageSelectSwitcher/PageSelectSwitcher.jsx";
import {PAGES_SWITCHER_LINKS} from "../../configurations/pageSelectSwitcherItems.js";

function ScreenWithMapTemplate(props) {
  console.log(PAGES_SWITCHER_LINKS[props.currentPage])
  return (
    <div className="screen-with-map">
      <MainHeader/>
      <MapModeControlPanel/>
      <div className="screen-with-map__main-content">
        <div className="main-content__side-block">
          <header className="side-block__page-title">{props.title}</header>
          {props.children}
        </div>
        <div className="main-content__map">
          <MapScaleBar/>
          <PageSelectSwitcher currentSelection={PAGES_SWITCHER_LINKS[props.currentPage]} />
          <Map places={props.places} routes={props.routes} statusRoutes={props.statusRoutes}
               allPoints={props.allPoints}/>
        </div>
      </div>
    </div>
  );
}

export default ScreenWithMapTemplate;
