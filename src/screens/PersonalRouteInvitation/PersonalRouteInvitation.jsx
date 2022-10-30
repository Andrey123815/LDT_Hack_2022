import React from 'react';
import './PersonalRouteInvitation.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {useNavigate} from "react-router-dom";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";

function PersonalRouteInvitation() {
  const navigate = useNavigate();
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Подберем персональный маршрут по ВДНХ</PageTitle>
        <div className="personal-route__explanation">
          Ответив на несколько вопросов, вы поможете нам подобрать <span className="personal-route__explanation_accent">подходящие</span> для Вас маршруты
        </div>
        <SimpleButton onClick={() => navigate(NAV_ROUTES.collectTripTeamInfo)}>Начнем поиск приключений!</SimpleButton>
      </div>
    </QuestionnaireTemplate>
  );
}

export default PersonalRouteInvitation;
