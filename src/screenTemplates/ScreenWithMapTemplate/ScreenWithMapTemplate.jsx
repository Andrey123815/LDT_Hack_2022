import React from 'react';
import './ScreenWithMapTemplate.scss';
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import Map from "../../components/Map/Map.jsx";

function ScreenWithMapTemplate(props) {
  return (
    <div className="screen-with-map">
      <MainHeader />
      <div className="screen-with-map__main-content">
        <div className="main-content__side-block">
          <header className="side-block__page-title">{props.title}</header>
          <main className="side-block__body">
            {props.children}
          </main>
        </div>
        <div className="main-content__map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ScreenWithMapTemplate;
