import React from 'react';
import './Input.scss';

function Input(props) {
  const styles = {
    width: props.width,
  }
  return (
    <>
      <input className="simple-input" type="text" placeholder={props.placeholder} style={styles} />
    </>
  );
}

export default Input;
