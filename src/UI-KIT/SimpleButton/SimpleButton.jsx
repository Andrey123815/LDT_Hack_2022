import React from 'react';
import './SimpleButton.scss';

function SimpleButton(props) {
  return (
    <button className="simple-button" style={{width: props.width, marginTop: props.marginTop}} onClick={props.onClick}>
      <span>{props.children}</span>
    </button>
  );
}

export default SimpleButton;
