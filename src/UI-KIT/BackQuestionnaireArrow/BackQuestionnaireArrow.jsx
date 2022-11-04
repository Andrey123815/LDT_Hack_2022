import React from 'react';
import './BackQuestionnaireArrow.scss';
import {useNavigate} from "react-router-dom";

function BackQuestionnaireArrow(props) {
  if (props.isFirstPage) {
    return null;
  }

  const navigate = useNavigate();

  return (
    <div className="back-questionnaire-arrow" onClick={() => navigate(-1)}>
      <img style={{transform: props.direction === 'right' ? 'rotate(180deg)' : 'rotate(0deg)'}} src="/icons/back-questionnaire-arrow.svg" alt="Назад" />
    </div>
  );
}

export default BackQuestionnaireArrow;
