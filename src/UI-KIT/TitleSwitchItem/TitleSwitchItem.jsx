import React from 'react';
import './TitleSwitchItem.scss';

function TitleSwitchItem(props) {
  const style = props.active ? 'title-switch-item_active' : 'title-switch-item';
  return (
    <div className={style} onClick={props.onClick}>
      <span>{props.children}</span>
    </div>
  );
}

export default TitleSwitchItem;
