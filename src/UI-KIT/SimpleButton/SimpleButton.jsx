import React from 'react';
import './SimpleButton.scss';

function SimpleButton(props) {
  return (
    <button className="simple-button" style={{width: props.width, marginTop: props.marginTop}}>
      {props.children}
    </button>
  );
}

export default SimpleButton;
