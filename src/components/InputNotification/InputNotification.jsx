import React from 'react';

function InputNotification(props) {
  return (
    <div className="input-notification">
      <img src="/icons/attention-icon.svg" alt="Ошибка" />
      <div className="input-notification__text">
        {props.children}
      </div>
    </div>
  );
}

export default InputNotification;
