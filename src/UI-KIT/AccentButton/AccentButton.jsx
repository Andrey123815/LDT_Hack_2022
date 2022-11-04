import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
  return (
    <button className={`accent-button_${props.theme || 'blue'}`}>
      {props.children}
    </button>
  );
}

export default AccentButton;
