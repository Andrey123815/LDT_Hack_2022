import React from 'react';
import './BonusSystemBanner.scss';

function BonusSystemBanner(props) {
  return (
    <div className="bonus-system-banner">
      <img src="/images/bonus-cards.png" alt=""/>
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
