import LoginPage from "../screens/LoginPage/LoginPage.jsx";
import RouteTypeChoicePage from "../screens/RouteTypeChoicePage/RouteTypeChoicePage.jsx";
import {QUEST_NAV_ROUTES, QUESTIONNAIRE_NAVIGATION} from "./subNavigation/questionnaireNavigation.jsx";

export const NAV_ROUTES = {
  root: '/',
  verify: '/verify',
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
  ],
  questionnaire: QUESTIONNAIRE_NAVIGATION,
};
