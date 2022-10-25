import React from 'react';
import Input from "../../UI-KIT/Input/Input.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import SupportOffer from "../../UI-KIT/SupportOffer/SupportOffer.jsx";
import {NavLink} from "react-router-dom";
import './LoginPage.scss';

function LoginPage() {
  const width = '85%';
  return (
    <div className="login-page">
      <div className="login-page__content">
        <img style={{marginTop: "15%", marginBottom: "10%"}} src="vdnh.svg" width="55%" alt="ВДНХ"/>
        <Input placeholder="Телефон или e-mail" width={width}/>
        <Input placeholder="Пароль" width={width}/>
        <SimpleButton width={width} marginTop="4%">
          <NavLink to={'/route-selection'}>Войти</NavLink>
        </SimpleButton>
        <SupportOffer title="Забыли пароль?"/>
      </div>
    </div>
  );
}

export default LoginPage;
