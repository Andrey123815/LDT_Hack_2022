import React from 'react';
import './MapModeControlPanel.scss';
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

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
      <AccentButton theme="blue" onClick={() => window.open("https://vdnh.ru/routes/", "_blank")}>Тематические маршруты</AccentButton>
      <AccentButton theme="red" onClick={handlePersonalRoutesClick}>Персональные маршруты</AccentButton>
      <AccentButton theme="pastel" onClick={() => navigate(NAV_ROUTES.freeModeRoutes)}>Все локации</AccentButton>
    </div>
  );
}

export default MapModeControlPanel;
