import React, {useState} from 'react';
import './PageSelectSwitcher.scss';
import {
  PAGES_SWITCHER_LINKS,
  PAGES_SWITCHER_LINKS_THEME
} from "../../configurations/pageSelectSwitcherItems.js";
import {isMobile} from "../../libraries/screenTypeCheck.js";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const handlePersonalRoutesSelect = (navigate, isQuestionnaireCompleted) => {
  if (isQuestionnaireCompleted) {
    navigate(NAV_ROUTES.personalRoutes);
    return;
  }
  navigate(NAV_ROUTES.personalRouteInvitation);
}

const REDIRECT_CONFIGURATION = {
  'Тематические маршруты': () => window.open("https://vdnh.ru/routes/", "_blank"),
  'Персональные маршруты': handlePersonalRoutesSelect,
  'Все локации ВДНХ': (navigate) => navigate(NAV_ROUTES.allLocationPoints),
};

function PageSelectSwitcher(props) {
  const mobileVersion = isMobile();
  const navigate = useNavigate();
  const isQuestionnaireCompleted = useSelector(state => state.questionnaire.completed);

  if (!mobileVersion) {
    return null;
  }

  const selectPageRedirect = (e) => {
    REDIRECT_CONFIGURATION[e.target.value](navigate, isQuestionnaireCompleted);
  }

  const selectItemStyle
    = PAGES_SWITCHER_LINKS_THEME[props.currentSelection];

  return (
    <div className="page-select-switcher" style={selectItemStyle}>
      <span>{props.currentSelection}</span>
        <img src="/icons/down-select-arrow.svg" width="24px" height="24px" alt="down arrow" />
      <select
        className="select select__option"
        onChange={selectPageRedirect}
        style={selectItemStyle}
        value={props.currentSelection}
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
