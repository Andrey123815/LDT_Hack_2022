import React from 'react';
import './Input.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

function Input(props) {
  const styles = {
    width: props.width,
    background: !isMobile() ? '#FFFFFF' : '#F5F5F5',
  }
  return (
    <>
      <input className="simple-input" type="text" placeholder={props.placeholder} style={styles} />
    </>
  );
}

export default Input;
