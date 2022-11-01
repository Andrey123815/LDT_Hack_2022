import React from 'react';
import './FinalChoiceItemsBlock.scss';
import FinalChoiceItem from "../../UI-KIT/FinalChoiceItem/FinalChoiceItem.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";

function FinalChoiceItemsBlock(props) {
  return (
    <div className="choice-item-block">
      <header className="choice-item-block__header">{props.block}</header>
      <div className={`choice-item-block__items_${props.type}`}>
        {(props.block === 'Интересы' || props.block === 'Компания')
          ? props.data.map((item, index) => <FinalChoiceItem key={props.block + index}>{item}</FinalChoiceItem>)
          : <FinalChoiceItem>{props.data}</FinalChoiceItem>
        }
      </div>
    </div>
  );
}

export default FinalChoiceItemsBlock;
