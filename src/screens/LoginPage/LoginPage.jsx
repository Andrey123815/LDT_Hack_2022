import React, {useEffect, useState} from 'react';
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import './LoginPage.scss';
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import {TextField} from "@mui/material";
import {isMobile} from "../../libraries/screenTypeCheck.js";
import {
  numberAutocomplete,
  NumberPhoneFormat, numberServiceSymbols,
} from "../../libraries/autoInputPrettier.js";
import {Regex} from "../../configurations/inputValidation.js";
import InputNotification from "../../components/InputNotification/InputNotification.jsx";

const focus = (e) => {
  if (e.target.value === "") {
    e.target.value = NumberPhoneFormat.phoneBeginString;
  }
}

const keyUp = (e) => {
  if (e.keyCode === 8) {
    let inputValue = e.target.value;
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

  const [isInputValid, setIsInputValid] = useState(true);
  const [phone, setPhone] = useState('');

  const isValidInputData = () => {
    setIsInputValid(Regex.validPhone.test(phone));
  }

  useEffect(() => {
    isValidInputData()
  }, [phone]);


  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.verify}>
      <div className="login-page">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Укажите номер телефона чтобы получить бонусы в программе "Друзья ВДНХ"</PageTitle>
        <div className="input-block">
          <TextField
            id="standard-helperText"
            label="Ваш телефон"
            placeholder="+ 7 (999) 999-99-99"
            onFocus={focus}
            onInput={(e) => {numberAutocomplete(e)}}
            onChange={(e) => setPhone(e.target.value)}
            error={!isInputValid}
            onKeyUp={keyUp}
            variant="filled"
            sx={{width: width}}
          />
          {!isInputValid &&
            <InputNotification width={width}>Упс! Кажется телефон заполнен неправильно</InputNotification>
          }
          <SimpleButton onClick={() => {
            if (isInputValid) {
              navigate(NAV_ROUTES.collectTripTeamInfo);
            }
          }}>
            Войти
          </SimpleButton>
        </div>
      </div>
    </QuestionnaireTemplate>
  );
}

export default LoginPage;
