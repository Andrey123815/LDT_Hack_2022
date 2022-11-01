import React from 'react';
import RouteTypeItem from "../../components/RouteTypeItem/RouteTypeItem.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import './RouteTypeChoicePage.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import {ROUTE_TYPES} from "../../configurations/routeTypes.js";
import {useNavigate} from "react-router-dom";

function RouteTypeChoicePage(props) {
  const navigate = useNavigate();
  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.routeTypeChoice}>
      <div className="route-type-choice">
        <QuestionnaireHeaderIcon size='large' />
        <PageTitle>Выберите формат</PageTitle>
        <div className="route-type__items">
          {ROUTE_TYPES.map(({img, description, navigateTo}) =>
            <RouteTypeItem key={img} path={img} description={description} onClick={() => navigate(navigateTo)} />
          )}
        </div>
      </div>
    </QuestionnaireTemplate>
  );
}

export default RouteTypeChoicePage;
