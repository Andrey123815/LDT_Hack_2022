import LoginPage from "../screens/LoginPage/LoginPage.jsx";
import RouteSelection from "../screens/RouteSelection/RouteSelection.jsx";
import RouteTypeChoicePage from "../screens/RouteTypeChoicePage/RouteTypeChoicePage.jsx";

export const NAV_ROUTES = {
  verify: "/verify",
  routeSelect: "/route-select"
}

export const NAV_ITEMS = [
  {
    path: "/",
    element: <RouteTypeChoicePage />
  },
  {
    path: "/verify",
    element: <LoginPage />
  },
  {
    path: "/route-select",
    element: <RouteSelection />
  },
];
