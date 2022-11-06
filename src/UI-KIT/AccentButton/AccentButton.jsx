import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
  const styles = {
    blue: {
      background: '#336AF7',
      color: '#FFFFFF',
      hoverBG: '#124BDF'
    },
    white: {
      background: '#FFFFFF',
      color: '#336AF7',
      hoverBG: '#124BDF'
    },
    red: {
      background: '#E22C38',
      color: '#FFFFFF',
      hoverBG: '#D32934'
    },
    pastel: {
      background: '#F7EBE6',
      color: '#000000',
      hoverBG: '#F7EBE6'
    }
  };
  return (
    <button style={styles[props.theme]} onClick={props.onClick} className="accent-button">
      <span>{props.children}</span>
    </button>
  );
}

export default AccentButton;
