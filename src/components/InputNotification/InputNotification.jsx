import React from 'react';
import './InputNotification.scss';

function InputNotification(props) {
  return (
    <div className="input-notification" style={{width: props.width}}>
      <img src="/icons/attention-icon.svg" alt="Ошибка" />
      <div className="input-notification__text">
        {props.children}
      </div>
    </div>
  );
}

export default InputNotification;
