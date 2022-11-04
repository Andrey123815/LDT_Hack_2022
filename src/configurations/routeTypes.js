import {QUEST_NAV_ROUTES} from "./subNavigation/questionnaireNavigation.jsx";
import {NAV_ROUTES} from "./navigation.jsx";

export const ROUTE_TYPES = [
  {
    img: '/images/routeTypes/theme-routes.svg',
    description: 'Тематические маршруты',
    navigateTo: '',
    redirectToOuterSource:
      () => window.open("example.com", "_blank"),
  },
  {
    img: '/images/routeTypes/personal-routes.svg',
    description: 'Персональные маршруты',
    navigateTo: QUEST_NAV_ROUTES.personalRouteInvitation,
  },
];
