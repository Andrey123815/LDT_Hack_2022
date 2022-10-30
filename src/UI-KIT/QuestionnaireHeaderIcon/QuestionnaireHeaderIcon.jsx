import React from 'react';
import './QuestionnaireHeaderIcon.scss';

function QuestionnaireHeaderIcon(props) {
  const size = props.size === 'small' ? '120px' : '214px';
  return (
    <>
      <img style={{marginTop: props.size === 'small' ? '55px' : '40px'}} src="/images/vdnh.svg" width={size} height={size} alt="Эмблема ВДНХ" />
    </>
  );
}

export default QuestionnaireHeaderIcon;
