import React from 'react';
import './BackToMapButton.scss';

function BackToMapButton(props) {
  return (
    <button className="back-to-map-button" onClick={props.onClick}>
      <img src="/icons/back-simple-arrow.svg" alt="back arrow" />
      <span>{props.children}</span>
    </button>
  );
}

export default BackToMapButton;
