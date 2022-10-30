import React, {useState} from 'react';
import './CollectTripTeamInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import {useNavigate} from "react-router-dom";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";

const variants = [
  'Один', 'Пара', 'Компанией', 'Семьей'
];

const two = [
  'Дети', 'Животные'
];

const defaultMainCategories = new Array(variants.length).fill(false);
const defaultAdditionalCategories = new Array(two.length).fill(false);

function CollectTripTeamInfo() {
  const [mainCategories, setMainCategories] = useState(defaultMainCategories);
  const [additionalCategories, setAdditionalCategories] = useState(defaultAdditionalCategories);

  const navigate = useNavigate();

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="trip-team-info">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>С кем пойдете?</PageTitle>
        <div className="trip-team-info__choice-block">
          {variants.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={mainCategories[index]}
              onClick={() => {
                const currStatus = mainCategories[index];
                setMainCategories(mainCategories
                  .slice()
                  .map((item, ind) => ind === index ? !currStatus : false));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <span className="trip-team-info__subtitle">С нами будут</span>
        <div className="trip-team-info__choice-block">
          {two.map((item, index) =>
            <QuestionnaireChoiceItem
              key={item}
              active={additionalCategories[index]}
              onClick={() => {
                const currStatus = additionalCategories[index];
                setAdditionalCategories(additionalCategories
                  .slice()
                  .map((item, ind) => ind === index ? !currStatus : false));
              }}
            >
              {item}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <SimpleButton onClick={() => navigate(NAV_ROUTES.collectInterestsInfo)}>Далее</SimpleButton>
        <SimpleButton lowPriority={true} onClick={() => navigate(NAV_ROUTES.collectInterestsInfo)}>Пропустить</SimpleButton>
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTripTeamInfo;
