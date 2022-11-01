import React from 'react';
import './QuestionnaireChoiceItem.scss';

function QuestionnaireChoiceItem(props) {
  const status = props.active ? 'active' : 'passive';

  return (
    <div className={`choice-item_${status}`} onClick={props.onClick}>
      {/*{props.active &&*/}
        <img style={{visibility: status === 'passive' ? 'hidden' : 'visible'}} src="/icons/selected-item.svg" alt=""/>
      {/*}*/}
      <span className={`choice-item__text_${status}`}>{props.children}</span>
    </div>
  );
}

export default QuestionnaireChoiceItem;
