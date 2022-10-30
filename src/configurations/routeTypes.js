import {QUEST_NAV_ROUTES} from "./subNavigation/questionnaireNavigation.jsx";

export const ROUTE_TYPES = [
  {
    img: '/images/routeTypes/theme-routes.svg',
    description: 'Тематические маршруты',
    navigateTo: '/theme-routes',
  },
  {
    img: '/images/routeTypes/personal-routes.svg',
    description: 'Персональные маршруты',
    navigateTo: QUEST_NAV_ROUTES.personalRouteInvitation,
  },
];
