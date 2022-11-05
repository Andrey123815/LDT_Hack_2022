import React from 'react';
import './MainHeader.scss';

const HEADER_ITEMS = {
  left: [
    <img src="/images/vdnh.svg" width="66px" alt="main menu"/>,
    'События',
    'Места',
    'Посетителям',
    'Контакты',
    'Ещё...',
  ],
  right: [
    'ENG',
    '中文',
    <img src="/icons/search.svg" alt="search"/>,
  ],
};

function MainHeader() {
  return (
    <div className="point-card-header">
      <div className="point-card-header__left-part">
        {HEADER_ITEMS.left.map((item, index) =>
          <span key={item.toString()} className="point-card-header__item">{item}</span>
        )}
      </div>
      <div className="point-card-header__right-part">
        {HEADER_ITEMS.right.map(item =>
          <span key={item.toString()} className="point-card-header__item">{item}</span>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
