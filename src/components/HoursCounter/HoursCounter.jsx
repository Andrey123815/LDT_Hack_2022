import React from 'react';
import './HoursCounter.scss';

function HoursCounter(props) {
  return (
    <div className="hours-counter">
      <img src="/icons/minus-button.svg" alt="minus" />
      <div className="hours-counter__count-info">
        <span className="count-info__hours-number">9</span>
        <span className="count-info__description">часов</span>
      </div>
      <img src="/icons/plus-button.svg" alt="plus" />
    </div>
  );
}

export default HoursCounter;
