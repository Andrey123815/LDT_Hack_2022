import React from 'react';
import Input from "../../UI-KIT/Input/Input.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import './LoginPage.scss';
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const width = '85%';
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-page__content">
        <img style={{marginTop: "15%", marginBottom: "10%"}} src="vdnh.svg" width="55%" alt="ВДНХ"/>
        <Input placeholder="Телефон или e-mail" width={width}/>
        <Input placeholder="Пароль" width={width}/>
        <SimpleButton width={width} marginTop="4%" onClick={() => navigate(NAV_ROUTES.routeSelect)}>
          Войти
        </SimpleButton>
      </div>
    </div>
  );
}

export default LoginPage;
