import React from 'react';
import './FreeModeRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import NewLocationOffer from "../../components/NewLocationOffer/NewLocationOffer.jsx";
import MapFilterBlock from "../../components/MapFilterBlock/MapFilterBlock.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";
import {useSelector} from "react-redux";

function FreeModeRoutes() {
  const pointsWithFilters = useSelector(state => state.places.placesWithFilters)

  console.log('pointsWithFilters', pointsWithFilters)

  return (
    <>
      <ScreenWithMapTemplate
        title="Выберите, что вас интересует"
        places={pointsWithFilters}
        allPoints={true}
      >
        <MapFilterBlock/>
        <InviteToLoyaltyProgram />
        <NewLocationOffer />
      </ScreenWithMapTemplate>
    </>
  );
}

export default FreeModeRoutes;
