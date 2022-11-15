import React from 'react';
import './AllLocationPoints.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import NewLocationOffer from "../../components/NewLocationOffer/NewLocationOffer.jsx";
import MapFilterBlock from "../../components/MapFilterBlock/MapFilterBlock.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";
import {useSelector} from "react-redux";
import {MAP_PAGES} from "../../configurations/pageSelectSwitcherItems.js";

function AllLocationPoints() {
  const pointsWithFilters = useSelector(state => state.places.placesWithFilters)

  return (
    <>
      <ScreenWithMapTemplate
        title="Выберите, что вас интересует"
        places={pointsWithFilters}
        allPoints={true}
        currentPage={MAP_PAGES.AllLocationPoints}
      >
        <div className="locations__content-block">
          <MapFilterBlock/>
          <InviteToLoyaltyProgram/>
          <NewLocationOffer />
        </div>
      </ScreenWithMapTemplate>
    </>
  );
}

export default AllLocationPoints;
