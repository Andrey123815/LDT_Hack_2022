import React from 'react';
import './StandardButtonsBlock.scss';
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {useNavigate} from "react-router-dom";

function StandardButtonsBlock(props) {
  const navigate = useNavigate();

  return (
    <div className="standard-buttons-block">
      <SimpleButton onClick={() => navigate(props.navigateTo)}>Далее</SimpleButton>
      <SimpleButton lowPriority={true} onClick={() => navigate(props.navigateTo)}>Пропустить</SimpleButton>
    </div>
  );
}

export default StandardButtonsBlock;
