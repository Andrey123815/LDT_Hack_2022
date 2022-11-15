import React from 'react';
import './BackToMapButton.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

function BackToMapButton(props) {
  const size = isMobile() ? '25px' : '28px';
  return (
    <button className="back-to-map-button" onClick={props.onClick}>
      <img className="back-to-map-button__arrow" src="/icons/back-simple-arrow.svg" width={size} height={size} alt="back arrow" />
      <span>{props.children}</span>
    </button>
  );
}

export default BackToMapButton;
