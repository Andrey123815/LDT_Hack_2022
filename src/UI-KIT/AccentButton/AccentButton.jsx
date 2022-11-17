import React from 'react';
import './AccentButton.scss';
import {ACCENT_BUTTON_STYLES} from "../../configurations/pageSelectSwitcherItems.js";

function AccentButton(props) {
  let themeStyles = props.theme ? ACCENT_BUTTON_STYLES[props.theme] : {};
  const buttonStyles = Object.assign(props.width
    ? {width: props.width}
    : {},
    themeStyles
  );

  return (
    <button style={buttonStyles} onClick={props.onClick} className="accent-button">
      <span>{props.children}</span>
    </button>
  );
}

export default AccentButton;
