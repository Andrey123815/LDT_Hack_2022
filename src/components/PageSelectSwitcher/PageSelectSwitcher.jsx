import React, {useState} from 'react';
import './PageSelectSwitcher.scss';
import {
  PAGES_SWITCHER_LINKS,
  PAGES_SWITCHER_LINKS_THEME
} from "../../configurations/pageSelectSwitcherItems.js";
import {isMobile} from "../../libraries/screenTypeCheck.js";

function PageSelectSwitcher(props) {
  const [selectItem, setSelectItem] = useState('');

  const mobileVersion = isMobile();

  if (!mobileVersion) {
    return null;
  }

  const selectItemStyle = PAGES_SWITCHER_LINKS_THEME[
    selectItem
      ? selectItem
      : props.currentSelection
  ];

  return (
    <div className="page-select-switcher" style={selectItemStyle}>
      <span>{selectItem || props.currentSelection}</span>
        <img src="/icons/down-select-arrow.svg" width="24px" height="24px" alt="down arrow" />
      <select
        className="select select__option"
        onChange={(e) => setSelectItem(e.target.value)}
        style={selectItemStyle}
        value={selectItem || props.currentSelection}
      >
        {PAGES_SWITCHER_LINKS
          .map(page =>
            <option
              key={page}
              className="select__option"
              style={PAGES_SWITCHER_LINKS_THEME[page]}
              value={page}
            >
              {page}
            </option>
          )
        }
      </select>
    </div>
  );
}


export default PageSelectSwitcher;
