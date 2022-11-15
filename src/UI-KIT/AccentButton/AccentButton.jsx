import React from 'react';
import './AccentButton.scss';

const styles = {
  blue: {
    background: '#336AF7',
    color: '#FFFFFF',
    "&:hover": '#124BDF'
  },
  white: {
    background: '#FFFFFF',
    color: '#336AF7',
    "&:hover": '#124BDF'
  },
  red: {
    background: '#E22C38',
    color: '#FFFFFF',
    "&:hover": '#D32934'
  },
  pastel: {
    background: '#FFF9F7',
    color: '#000000',
    "&:hover": '#F7EBE6'
  }
};

function AccentButton(props) {
  let themeStyles = props.theme ? styles[props.theme] : {};
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
