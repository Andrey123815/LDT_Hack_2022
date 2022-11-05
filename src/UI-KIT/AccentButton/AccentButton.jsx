import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
  const styles = {
    blue: {
      background: '#336AF7',
      color: '#FFFFFF'
    },
    white: {
      background: '#FFFFFF',
      color: '#336AF7',
    },
    red: {
      background: '#E22C38',
      color: '#FFFFFF',
    },
    pastel: {
      background: '#F7EBE6',
      color: '#000000',
    }
  };
  return (
    <button style={styles[props.theme]} onClick={props.onClick} className="accent-button">
      <span>{props.children}</span>
    </button>
  );
}

export default AccentButton;
