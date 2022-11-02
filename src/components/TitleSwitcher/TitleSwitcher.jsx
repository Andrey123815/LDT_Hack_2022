import React from 'react';
import './TitleSwitcher.scss';
import TitleSwitchItem from "../../UI-KIT/TitleSwitchItem/TitleSwitchItem.jsx";

function TitleSwitcher(props) {
  return (
    <div className="title-switcher">
      {props.titles.map((title, index) =>
        <TitleSwitchItem
          status={props.titlesStatus[index]}
          onClick={() => {
            console.log(props.titlesStatus.slice().fill(false).splice(index, 1, true));
            props.setTitlesStatus(props.titlesStatus[index]
              ? props.titlesStatus.slice().splice(index, 1, false)
              : props.titlesStatus.slice().fill(false).splice(index, 1, true))
          }}
        >
          {title}
        </TitleSwitchItem>
      )}
    </div>
  );
}

export default TitleSwitcher;
