import React from 'react';
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {useNavigate} from "react-router-dom";

function StandardButtonsBlock(props) {
  const navigate = useNavigate();

  return (
    <>
      <SimpleButton onClick={() => navigate(props.navigateTo)}>Далее</SimpleButton>
      <SimpleButton lowPriority={true} onClick={() => navigate(props.navigateTo)}>Пропустить</SimpleButton>
    </>
  );
}

export default StandardButtonsBlock;
