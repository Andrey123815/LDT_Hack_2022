import React from 'react';
import './PersonalMapRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import PersonalRouteInfoItem from "../../UI-KIT/PersonalRouteInfoItem/PersonalRouteInfoItem.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";
import {useSelector} from "react-redux";
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";

const personalRouteItemTheme = ['#336AF7', '#F7C850', '#00FFF0'];

function PersonalMapRoutes(props) {
  const personalRoutes = useSelector(state => state.personalRoutes);
  console.log(personalRoutes)
  const array = ['', '', ''];
  console.log(array)
  // personalRoutes.routes?
  return (
    <>
      <ScreenWithMapTemplate title="Персональные маршруты">
        <div className="personal-route-info__routes">
          {array.map((personalRoute, index) =>
            <PersonalRouteInfoItem
              key={`Маршрут №${index + 1}`}
              title={`Маршрут №${index + 1}`}
              theme={personalRouteItemTheme[index]}
              duration="5"
              distance="1"
            />
          )}
        </div>
        <div className="pages-navigation">
          <AccentButton theme="white">На карту локаций</AccentButton>
          <AccentButton theme="blue">Готовые маршруты</AccentButton>
        </div>
        <InviteToLoyaltyProgram />
      </ScreenWithMapTemplate>
    </>
  );
}

export default PersonalMapRoutes;
