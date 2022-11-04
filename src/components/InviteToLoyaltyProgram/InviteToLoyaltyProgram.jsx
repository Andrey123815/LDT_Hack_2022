import React from 'react';
import './InviteToLoyaltyProgram.scss';
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";

function InviteToLoyaltyProgram(props) {
  return (
    <div className="invite-to-loyalty-program">
      <div className="invite-to-loyalty-program__content">
        <header className="content__header">
          Участвуйте в программе лояльности «Друзья ВДНХ»
        </header>
        <div className="content__invitation">
          Присоединяйтесь к программе лояльности «Друзья ВДНХ» и получайте скидки в кафе и ресторанах и на покупку билетов.
        </div>
        <AccentButton theme="blue">Войти в программу</AccentButton>
      </div>
      <div className="invite-to-loyalty-program__side-panel">
        <img src="/icons/share-object_red.svg" alt="share" />
      </div>
    </div>
  );
}

export default InviteToLoyaltyProgram;
