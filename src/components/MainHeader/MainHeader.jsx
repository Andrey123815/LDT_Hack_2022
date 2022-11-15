import React from 'react';
import './MainHeader.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

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
  const showMobileVersion = isMobile();

  if (showMobileVersion) {
    return null;
  }

  return (
    <div className="main-header">
      <div className="main-header__left-part">
        {HEADER_ITEMS.left.map((item, index) =>
          <span key={item.toString()} className="main-header__item">{item}</span>
        )}
      </div>
      <div className="main-header__right-part">
        {HEADER_ITEMS.right.map(item =>
          <span key={item.toString()} className="main-header__item">{item}</span>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
