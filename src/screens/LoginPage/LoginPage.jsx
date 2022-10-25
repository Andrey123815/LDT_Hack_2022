import React from 'react';
import Input from "../../UI-KIT/Input/Input.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import SupportOffer from "../../UI-KIT/SupportOffer/SupportOffer.jsx";
import {NavLink} from "react-router-dom";

function LoginPage() {
  return (
    <>
      <img style={{marginTop: "15%", marginBottom: "10%"}} src="vdnh.svg" width="55%"  alt="ВДНХ"/>
      <Input placeholder="Введите свой телефон" width="85%" />
      <Input placeholder="Введите свой телефон" width="85%" />
      <SimpleButton width="85%" marginTop="4%">
        <NavLink to={'/route-selection'}>Войти</NavLink>
      </SimpleButton>
      <SupportOffer title="Забыли пароль?" />
    </>
  );
}

export default LoginPage;
