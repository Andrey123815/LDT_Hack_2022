import React from 'react';
import './HoursCounter.scss';

function HoursCounter(props) {
  return (
    <div className="hours-counter">
      <img onClick={props.minus} src="/icons/minus-button.svg" alt="minus" />
      <div className="hours-counter__count-info">
        <span className="count-info__hours-number">{props.hours}</span>
        <span className="count-info__description">часов</span>
      </div>
      <img onClick={props.plus} src="/icons/plus-button.svg" alt="plus" />
    </div>
  );
}

export default HoursCounter;
