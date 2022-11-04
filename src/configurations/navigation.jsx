import LoginPage from "../screens/LoginPage/LoginPage.jsx";
import RouteTypeChoicePage from "../screens/RouteTypeChoicePage/RouteTypeChoicePage.jsx";
import {QUEST_NAV_ROUTES, QUESTIONNAIRE_NAVIGATION} from "./subNavigation/questionnaireNavigation.jsx";
import MainPage from "../screens/MainPage/MainPage.jsx";
import DetailedPointInformation from "../screens/DetailedPointInformation/DetailedPointInformation.jsx";
import PersonalMapRoutes from "../screens/PersonalMapRoutes/PersonalMapRoutes.jsx";
import FreeModeRoutes from "../screens/FreeModeRoutes/FreeModeRoutes.jsx";

export const NAV_ROUTES = {
  root: '/',
  verify: '/verify',
  main: '/main',
  detailedPointInfo: '/detailed-point-info',
  personalRoutes: '/personal-routes',
  freeModeRoutes: '/free-modes-routes',
  ...QUEST_NAV_ROUTES
}

export const NAVIGATION = {
  global: [
    {
      path: NAV_ROUTES.root,
      element: <RouteTypeChoicePage/>
    },
    {
      path: NAV_ROUTES.verify,
      element: <LoginPage/>
    },
    {
      path: NAV_ROUTES.main,
      element: <MainPage/>
    },
    {
      path: NAV_ROUTES.detailedPointInfo,
      element: <DetailedPointInformation/>
    },
    {
      path: NAV_ROUTES.personalRoutes,
      element: <PersonalMapRoutes/>
    },
    {
      path: NAV_ROUTES.freeModeRoutes,
      element: <FreeModeRoutes/>
    },
  ],
  questionnaire: QUESTIONNAIRE_NAVIGATION,
};
