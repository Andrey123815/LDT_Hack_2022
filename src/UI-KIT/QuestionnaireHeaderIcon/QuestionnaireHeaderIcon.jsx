import React from 'react';
import './QuestionnaireHeaderIcon.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

function QuestionnaireHeaderIcon(props) {
  const isSmallSize = props.size === 'small' && isMobile();
  const size = props.size === isSmallSize ? '120px' : '214px';
  return (
    <>
      <img style={{marginTop: isSmallSize ? '40px' : '55px'}} src="/images/vdnh.svg" width={size}
           height={size} alt="Эмблема ВДНХ"/>
    </>
  );
}

export default QuestionnaireHeaderIcon;
