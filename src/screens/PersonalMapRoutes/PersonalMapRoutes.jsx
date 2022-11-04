import React from 'react';
import './PersonalMapRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import PersonalRouteInfoItem from "../../UI-KIT/PersonalRouteInfoItem/PersonalRouteInfoItem.jsx";
import PersonalRouteInvitation from "../PersonalRouteInvitation/PersonalRouteInvitation.jsx";

function PersonalMapRoutes(props) {
  return (
    <>
      <ScreenWithMapTemplate title="Персональные маршруты">
        <div>
          <PersonalRouteInfoItem />
          <PersonalRouteInfoItem />
          <PersonalRouteInfoItem />
        </div>
        <PersonalRouteInvitation />
      </ScreenWithMapTemplate>
    </>
  );
}

export default PersonalMapRoutes;
