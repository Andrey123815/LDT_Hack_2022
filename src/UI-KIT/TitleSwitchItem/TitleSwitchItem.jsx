import React from 'react';
import './TitleSwitchItem.scss';

function TitleSwitchItem(props) {
  return (
    <div className={`title-switch-item${props.isActive ? '_active' : ''}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default TitleSwitchItem;
