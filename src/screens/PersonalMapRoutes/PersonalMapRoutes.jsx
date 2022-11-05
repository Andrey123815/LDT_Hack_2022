import React from 'react';
import './PersonalMapRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import PersonalRouteInfoItem from "../../UI-KIT/PersonalRouteInfoItem/PersonalRouteInfoItem.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";
import {useSelector} from "react-redux";
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";
import {useNavigate} from "react-router-dom";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";

const personalRouteItemTheme = ['#336AF7', '#F7C850', '#00FFF0'];

function PersonalMapRoutes() {
  const personalRoutes = useSelector(state => state.personalRoutes.personalRoutes);
  const array = ['', '', ''];
  const navigate = useNavigate();

  let pointsInPersonalRoutes = [];
  personalRoutes.routes
    .map(({places}) => places.map(place => place))
    .forEach(subArrayPoints => pointsInPersonalRoutes = pointsInPersonalRoutes.concat(subArrayPoints))

  return (
    <>
      <ScreenWithMapTemplate title="Персональные маршруты" places={pointsInPersonalRoutes} routes={personalRoutes.routes}>
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
        <InviteToLoyaltyProgram />
      </ScreenWithMapTemplate>
    </>
  );
}

export default PersonalMapRoutes;
