import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
  return (
    <button className={`accent-button_${props.theme || 'blue'}`}>
      <span>{props.children}</span>
    </button>
  );
}

export default AccentButton;
