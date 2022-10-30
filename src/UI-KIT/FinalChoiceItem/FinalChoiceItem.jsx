import React from 'react';
import './FinalChoiceItem.scss';

function FinalChoiceItem(props) {
  return (
    <div className='final-choice-item'>
      {props.children}
    </div>
  );
}

export default FinalChoiceItem;
