import PersonalRouteInvitation from "../../screens/PersonalRouteInvitation/PersonalRouteInvitation.jsx";

export const QUEST_NAV_ROUTES = {
  personalRouteInvitation: '/personal-route-invitation',
  collectTripTeamInfo: '/collect-trip-team-info',
  collectInterestsInfo: '/collect-interests-info',
  collectTransportInfo: '/collect-transport-info',
  collectTimingInfo: '/collect-timing-info',
  questionnaireAnswersConfirmation: '/questionnaire-answers-confirmation'
};

export const QUESTIONNAIRE_NAVIGATION = [
  {
    path: QUEST_NAV_ROUTES.personalRouteInvitation,
    element: <PersonalRouteInvitation />
  },

];
