import React from 'react';
import './CollectTimingInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";

function CollectTimingInfo(props) {
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTimingInfo}>
      <div className="timing-choice">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>Сколько у вас есть свободного времени для маршрута?</PageTitle>
        <div className="timing-choice__tune-block">
          <img src="/icons/minus-button.svg" alt="minus" />
          <div className="tune-block__counter">
            <span className="counter__hours-number">9</span>
            <span className="counter__description">часов</span>
          </div>
          <img src="/icons/minus-button.svg" alt="minus" />
        </div>
        <StandardButtonsBlock navigateTo={NAV_ROUTES.questionnaireConfirmation} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTimingInfo;
