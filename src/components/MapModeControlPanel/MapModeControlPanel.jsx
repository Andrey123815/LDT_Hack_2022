import React from 'react';
import './MapModeControlPanel.scss';
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {PAGES_SWITCHER_LINKS} from "../../configurations/pageSelectSwitcherItems.js";

function MapModeControlPanel(props) {
  const navigate = useNavigate();
  const isQuestionnaireCompleted = useSelector(state => state.questionnaire.completed);

  const handlePersonalRoutesClick = () => {
    if (isQuestionnaireCompleted) {
      navigate(NAV_ROUTES.personalRoutes);
      return;
    }
    navigate(NAV_ROUTES.personalRouteInvitation);
  }

  return (
    <div className="map-mode-control-panel">
      <AccentButton theme="blue" onClick={() => window.open("https://vdnh.ru/routes/", "_blank")}>{PAGES_SWITCHER_LINKS[0]}</AccentButton>
      <AccentButton theme="red" onClick={handlePersonalRoutesClick}>{PAGES_SWITCHER_LINKS[1]}</AccentButton>
      <AccentButton theme="pastel" onClick={() => navigate(NAV_ROUTES.allLocationPoints)}>{PAGES_SWITCHER_LINKS[2]}</AccentButton>
    </div>
  );
}

export default MapModeControlPanel;
