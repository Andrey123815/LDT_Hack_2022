import React from 'react';
import './AccentButton.scss';

function AccentButton(props) {
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
  return (
    <button style={styles[props.theme]} onClick={props.onClick} className="accent-button">
      <span>{props.children}</span>
    </button>
  );
}

export default AccentButton;
