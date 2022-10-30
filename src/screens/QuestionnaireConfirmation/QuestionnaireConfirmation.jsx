import React from 'react';
import './QuestionnaireConfirmation.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";

function QuestionnaireConfirmation(props) {
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Сколько у вас есть свободного времени для маршрута?</PageTitle>

      </div>
    </QuestionnaireTemplate>
  );
}

export default QuestionnaireConfirmation;
