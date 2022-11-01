import PersonalRouteInvitation from "../../screens/PersonalRouteInvitation/PersonalRouteInvitation.jsx";
import CollectTripTeamInfo from "../../screens/CollectTripTeamInfo/CollectTripTeamInfo.jsx";
import CollectInterestsInfo from "../../screens/CollectInterestsInfo/CollectInterestsInfo.jsx";
import CollectTransportInfo from "../../screens/CollectTransportInfo/CollectTransportInfo.jsx";
import CollectTimingInfo from "../../screens/CollectTimingInfo/CollectTimingInfo.jsx";
import QuestionnaireConfirmation from "../../screens/QuestionnaireConfirmation/QuestionnaireConfirmation.jsx";

export const QUEST_NAV_ROUTES = {
  personalRouteInvitation: '/personal-route-invitation',
  collectTripTeamInfo: '/collect-trip-team-info',
  collectInterestsInfo: '/collect-interests-info',
  collectTransportInfo: '/collect-transport-info',
  collectTimingInfo: '/collect-timing-info',
  questionnaireConfirmation: '/questionnaire-answers-confirmation'
};

export const QUESTIONNAIRE_NAVIGATION = [
  {
    path: QUEST_NAV_ROUTES.personalRouteInvitation,
    element: <PersonalRouteInvitation />
  },
  {
    path: QUEST_NAV_ROUTES.collectTripTeamInfo,
    element: <CollectTripTeamInfo />
  },
  {
    path: QUEST_NAV_ROUTES.collectInterestsInfo,
    element: <CollectInterestsInfo />
  },
  {
    path: QUEST_NAV_ROUTES.collectTransportInfo,
    element: <CollectTransportInfo />
  },
  {
    path: QUEST_NAV_ROUTES.collectTimingInfo,
    element: <CollectTimingInfo />
  },
  {
    path: QUEST_NAV_ROUTES.questionnaireConfirmation,
    element: <QuestionnaireConfirmation />
  },
];
