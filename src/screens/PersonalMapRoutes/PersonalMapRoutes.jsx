import React, {useState} from 'react';
import './PersonalMapRoutes.scss';
import ScreenWithMapTemplate from "../../screenTemplates/ScreenWithMapTemplate/ScreenWithMapTemplate.jsx";
import PersonalRouteInfoItem from "../../UI-KIT/PersonalRouteInfoItem/PersonalRouteInfoItem.jsx";
import InviteToLoyaltyProgram from "../../components/InviteToLoyaltyProgram/InviteToLoyaltyProgram.jsx";
import {useSelector} from "react-redux";
import {MAP_PAGES} from "../../configurations/pageSelectSwitcherItems.js";

const PERSONAL_ROUTE_ITEMS_THEME = ['#336AF7', '#F7C850', '#00FFF0'];

function PersonalMapRoutes() {
  const personalRoutes = useSelector(state => state.personalRoutes.personalRoutes);
  const array = ['', '', ''];

  const [routesDistance, setRoutesDistance] = useState([1, 1, 1]);
  const [activeRouteNumbers, setActiveRouteNumbers] = useState(new Array(3).fill(false));

  let pointsInPersonalRoutes = personalRoutes.routes
    .map(({main, sup_points}) => main.map(place => place).concat(sup_points.map(places => places)));

  const handlePersonalRouteChoose = (idx) => {
    console.log('handlePersonalRouteChoose idx', idx)
    setActiveRouteNumbers(
      activeRouteNumbers[idx]
        ? new Array(3).fill(false)
        : new Array(3).fill(false).map((item, index) => index === idx)
    )
  }

  const getRoutesDistances = (routesDistances) => {
    setRoutesDistance(routesDistances);
  }

  const showAllRoutes = activeRouteNumbers.reduce(
    (ac, currentValue) => ac && !currentValue,
    true
  );

  return (
    <>
      <ScreenWithMapTemplate
        title="Персональные маршруты"
        places={pointsInPersonalRoutes}
        routes={personalRoutes.routes}
        statusRoutes={activeRouteNumbers.map(route => showAllRoutes || route)}
        currentPage={MAP_PAGES.PersonalMapRoutes}
        getRouteDistance={getRoutesDistances}
      >
        <div className="content-block">
          <div className="personal-route-info__routes">
            {array.map((personalRoute, index) =>
              <PersonalRouteInfoItem
                key={`Маршрут №${index + 1}`}
                title={`Маршрут №${index + 1}`}
                theme={PERSONAL_ROUTE_ITEMS_THEME[index]}
                onClick={() => handlePersonalRouteChoose(index)}
                active={activeRouteNumbers[index]}
                duration={Number((personalRoutes.routes[index].duration/60).toFixed(1)) + 1.5}
                distance={routesDistance[index]}
              />
            )}
          </div>
          <InviteToLoyaltyProgram />
        </div>
      </ScreenWithMapTemplate>
    </>
  );
}

export default PersonalMapRoutes;
