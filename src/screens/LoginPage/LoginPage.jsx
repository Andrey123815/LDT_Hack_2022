import React, {useState} from 'react';
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import './LoginPage.scss';
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import {TextField} from "@mui/material";
import {isMobile} from "../../libraries/screenTypeCheck.js";
import {
  numberAutocomplete,
  NumberPhoneFormat, numberServiceSymbols,
} from "../../libraries/autoInputPrettier.js";
import {Regex} from "../../configurations/inputValidation.js";

const focus = (e) => {
  if (e.target.value === "") {
    e.target.value = NumberPhoneFormat.phoneBeginString;
  }
}

const keyUp = (e) => {
  console.log(e.key)
  if (e.keyCode === 8) {
    let inputValue = e.target.value;
    console.log(inputValue)
    while (numberServiceSymbols.includes(inputValue[inputValue.length - 1])) {
      inputValue = inputValue.slice(0, inputValue.length - 1);
    }
    e.target.value = inputValue.slice();
  } else {
    if (!numberServiceSymbols.includes(e.key) && !Regex.numericSymbol.test(e.key)) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      return;
    }
  }

  if (e.target.value.length <= 4) {
    e.target.value = NumberPhoneFormat.phoneBeginString;
  }
}

function LoginPage() {
  const width = isMobile() ? '85%' : '45%';
  const navigate = useNavigate();

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.verify}>
      <div className="login-page">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Введите данные, чтобы войти в личный кабинет</PageTitle>
        <div className="input-block">
          <TextField
            id="standard-helperText"
            label="Ваш телефон"
            placeholder="+ 7 (999) 999-99-99"
            // helperText={inputError ? <InputNotification>Упс! Кажется телефон заполнен неправильно</InputNotification> : ''}
            onFocus={focus}
            onInput={numberAutocomplete}
            onKeyUp={keyUp}
            variant="standard"
            sx={{width: width}}
          />
          <SimpleButton onClick={() => navigate(NAV_ROUTES.collectTripTeamInfo)}>Войти</SimpleButton>
        </div>
      </div>
    </QuestionnaireTemplate>
  );
}

export default LoginPage;
