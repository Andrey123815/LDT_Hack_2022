import React from 'react';
import './BackQuestionnaireArrow.scss';

function BackQuestionnaireArrow(props) {
  if (props.isFirstPage) {
    return null;
  }

  return (
    <div className="back-questionnaire-arrow">
      <img src="/icons/back-questionnaire-arrow.svg" alt="Назад" />
    </div>
  );
}

export default BackQuestionnaireArrow;
