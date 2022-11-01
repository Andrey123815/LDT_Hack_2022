import React from 'react';
import './QuestionnaireConfirmation.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import {ADDITIONAL_VARIANTS, MAIN_VARIANTS} from "../../configurations/defaultListsItems/teamTrip.js";
import {TRANSPORT_TYPES} from "../../configurations/defaultListsItems/transportTypes.js";
import FinalChoiceItemsBlock from "../../components/FinalChoiceItemsBlock/FinalChoiceItemsBlock.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";

const getFromBackendInterests = ['Технологии', 'Выставки', 'Легенды', 'Парки'];
const tripTeam = [MAIN_VARIANTS[0], ADDITIONAL_VARIANTS[0]];
const chosenTransport = TRANSPORT_TYPES[0];
const timing = 9;

const resultArray = [getFromBackendInterests, tripTeam, chosenTransport, timing];
const blocks = ['Интересы', 'Компания', 'Передвижение', 'Свободное время'];
const types = ['slices', 'company', 'transport', 'free-time'];

function QuestionnaireConfirmation(props) {
  const navigate = useNavigate();
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='small' smallMargin={true} />
        <PageTitle withoutMargin={true}>Давайте сверимся, всё верно?</PageTitle>
        {resultArray.map((data, index) =>
          <FinalChoiceItemsBlock key={blocks[index]} block={blocks[index]} type={types[index]} data={data}/>
        )}
      </div>
      <SimpleButton onClick={() => navigate(NAV_ROUTES.verify)}>Далее</SimpleButton>
    </QuestionnaireTemplate>
  );
}

export default QuestionnaireConfirmation;
