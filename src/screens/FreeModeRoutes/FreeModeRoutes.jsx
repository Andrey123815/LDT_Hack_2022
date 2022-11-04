import React from 'react';
import './FreeModeRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import PersonalRouteInfoItem from "../../UI-KIT/PersonalRouteInfoItem/PersonalRouteInfoItem.jsx";
import PersonalRouteInvitation from "../PersonalRouteInvitation/PersonalRouteInvitation.jsx";
import NewLocationOffer from "../../components/NewLocationOffer/NewLocationOffer.jsx";
import BonusSystemBanner from "../../components/BonusSystemBanner/BonusSystemBanner.jsx";
import MapFilterBlock from "../../components/MapFilterBlock/MapFilterBlock.jsx";

function FreeModeRoutes(props) {
  return (
    <>
      <ScreenWithMapTemplate title="Выберите, что вас интересует">
        <MapFilterBlock />
        <BonusSystemBanner />
        <PersonalRouteInvitation />
        <NewLocationOffer />
      </ScreenWithMapTemplate>
    </>
  );
}

export default FreeModeRoutes;
