import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
  return (
    <button className="accent-button">
      {props.children}
    </button>
  );
}

export default AccentButton;
