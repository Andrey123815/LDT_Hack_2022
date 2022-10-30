import React, {useState} from 'react';
import './QuestionnaireChoiceItem.scss';

function QuestionnaireChoiceItem(props) {
  const status = props.active ? 'active' : 'passive';

  return (
    <div className={`choice-item_${status}`} onClick={props.onClick}>
      {props.active &&
        <img src="/icons/selected-item.svg" alt=""/>
      }
      <span>{props.children}</span>
    </div>
  );
}

export default QuestionnaireChoiceItem;
