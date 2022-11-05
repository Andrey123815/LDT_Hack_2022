import React, {useEffect, useState} from 'react';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {generateDefaultArr} from "../../libraries/generator.js";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import './CollectInterestsInfo.scss';
import {useDispatch} from "react-redux";
import {updateInterests} from "../../slices/questionnaire.js";

const getFromBackendInterests = [
  'Технологии', 'Выставки', 'Легенды', 'Парки', 'Спорт', 'Кафе', 'Москвариум', 'Космонавтика', 'Природа'
];

function CollectInterestsInfo() {
  const [selectedInterests, setSelectedInterests] =
    useState(generateDefaultArr(getFromBackendInterests.length));

  const dispatch = useDispatch();

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectInterestsInfo}>
      <div className="interest-info">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>Отметьте, что вас интересует?</PageTitle>
        <div className="interest-info__choice-block">
          {getFromBackendInterests.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={selectedInterests[index]}
              onClick={() => {
                const activeChoice = selectedInterests
                  .map((item, ind) => ind === index ? !item : item);
                setSelectedInterests(activeChoice);
                dispatch(updateInterests(activeChoice
                  .filter(item => item)
                  .map((item, index) => getFromBackendInterests[index])
                ));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <StandardButtonsBlock navigateTo={NAV_ROUTES.collectTransportInfo} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectInterestsInfo;
