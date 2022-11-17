import React from 'react';
import './NewLocationOffer.scss';
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";

function NewLocationOffer() {
  return (
    <div className="new-location-offer">
      <div className="new-location-offer__text">
        Предложите новую локацию или контент для карты ВДНХ
      </div>
      <AccentButton width="max-content" theme="white">Предложить</AccentButton>
    </div>
  );
}

export default NewLocationOffer;
