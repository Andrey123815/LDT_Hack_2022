import React from 'react';
import './BonusSystemBanner.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

function BonusSystemBanner(props) {
  const showMobileVersion = isMobile();
  return (
    <div className="bonus-system-banner">
      <img
        style={{position: showMobileVersion ? "relative" : "", right: showMobileVersion ? "10px" : ""}}
        src="/images/bonus-cards.png" width={showMobileVersion ? '110%' : '40%'}
        alt=""
      />
      <div className="bonus-system-banner__info">
        <header className="info__header">Собирайте бонусы от ВДНХ!</header>
        <article className="info__invitation">
          Проходите маршруты, отмечайте на карте точки и получайте бонусы, которые можно обменять на билеты или получить скидку.
        </article>
      </div>
    </div>
  );
}

export default BonusSystemBanner;
