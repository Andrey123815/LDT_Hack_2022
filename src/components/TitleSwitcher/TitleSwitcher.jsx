import React from 'react';
import './TitleSwitcher.scss';
import TitleSwitchItem from "../../UI-KIT/TitleSwitchItem/TitleSwitchItem.jsx";

function TitleSwitcher(props) {
  return (
    <div className="title-switcher">
      {props.titles.map(title =>
        <TitleSwitchItem
          key={title}
          isActive={title === props.activeTitle}
          onClick={() => {
            props.setActiveTitle(title)
          }}
        >
          {title}
        </TitleSwitchItem>
      )}
    </div>
  );
}

export default TitleSwitcher;
