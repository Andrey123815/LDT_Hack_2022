import React from 'react';
import {isMobile} from "../../libraries/screenTypeCheck.js";
import './QuestionnaireTemplate.scss';

export const TEMPLATE_TYPE = {
  verify: 'verify',
  routeTypeChoice: 'route-type-choice',
  personalRouteInvitation: 'personal-route-invitation',
  collectInterestsInfo: 'collect-interests-info',
  collectTimingInfo: 'collect-timing-info',
  collectTransportInfo: 'collect-transport-info',
  collectTripTeamInfo: 'collect-trip-team-info',
  questionAnswerConfirmation: 'question-answer-confirmation'
};

function QuestionnaireTemplate(props) {
  const showMobileVersion = isMobile();

  if (showMobileVersion) {
    return (
      <>
        {props.children}
      </>
    );
  }

  return (
    <div className="questionnaire">
      <img className="questionnaire__image" src={`/images/questionnaire/${props.page}-bg.svg`} alt='ВДНХ'/>
      <div className="questionnaire__side-background"></div>
      <div className="questionnaire__main-content">
        {props.children}
      </div>
    </div>
  );
}

export default QuestionnaireTemplate;
