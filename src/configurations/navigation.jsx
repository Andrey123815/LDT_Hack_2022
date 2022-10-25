import LoginPage from "../screens/LoginPage/LoginPage.jsx";
import RouteSelection from "../screens/RouteSelection/RouteSelection.jsx";

export const NAV_ITEMS = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/route-selection",
    element: <RouteSelection />
  },
];
