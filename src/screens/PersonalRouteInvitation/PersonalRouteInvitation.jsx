import React from 'react';
import './PersonalRouteInvitation.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";

function PersonalRouteInvitation(props) {
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        1234
      </div>
    </QuestionnaireTemplate>
  );
}

export default PersonalRouteInvitation;
