import React from 'react';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";

function QuestionnaireAnswersConfirmation(props) {
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Подберем персональный маршрут по ВДНХ</PageTitle>

      </div>
    </QuestionnaireTemplate>
  );
}

export default QuestionnaireAnswersConfirmation;
