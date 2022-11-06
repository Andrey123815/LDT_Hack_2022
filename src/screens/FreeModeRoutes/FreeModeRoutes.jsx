import React from 'react';
import './FreeModeRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import NewLocationOffer from "../../components/NewLocationOffer/NewLocationOffer.jsx";
import MapFilterBlock from "../../components/MapFilterBlock/MapFilterBlock.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";

function FreeModeRoutes() {
  return (
    <>
      <ScreenWithMapTemplate title="Выберите, что вас интересует">
        <MapFilterBlock/>
        <InviteToLoyaltyProgram />
        <NewLocationOffer />
      </ScreenWithMapTemplate>
    </>
  );
}

export default FreeModeRoutes;
