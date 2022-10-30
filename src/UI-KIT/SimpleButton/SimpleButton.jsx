import React from 'react';
import './SimpleButton.scss';

function SimpleButton(props) {
  return (
    <button className={`simple-button_${props.lowPriority ? 'low-priority': 'high-priority'}`} style={{width: props.width, marginTop: props.marginTop}} onClick={props.onClick}>
      <span>{props.children}</span>
    </button>
  );
}

export default SimpleButton;
