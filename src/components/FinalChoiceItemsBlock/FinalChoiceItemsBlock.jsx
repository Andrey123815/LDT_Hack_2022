import React from 'react';
import './FinalChoiceItemsBlock.scss';
import FinalChoiceItem from "../../UI-KIT/FinalChoiceItem/FinalChoiceItem.jsx";

function FinalChoiceItemsBlock(props) {
  return (
    <div className="choice-item-block">
      <header className="choice-item-block__header">{props.title}</header>
      <div className={`choice-item-block__items_${props.type}`}>
        {(props.title === 'Интересы' || props.title === 'Компания')
          ? props.res.length && props.res.map((item, index) =>
          <FinalChoiceItem key={props.title + index}>{item}</FinalChoiceItem>)
          : <FinalChoiceItem>{props.res}</FinalChoiceItem>
        }
      </div>
    </div>
  );
}

export default FinalChoiceItemsBlock;
