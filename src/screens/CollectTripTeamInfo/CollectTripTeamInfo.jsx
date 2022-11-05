import React, {useEffect, useState} from 'react';
import './CollectTripTeamInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {MAIN_VARIANTS, ADDITIONAL_VARIANTS} from "../../configurations/defaultListsItems/teamTrip.js";
import {generateDefaultArr} from "../../libraries/generator.js";
import {useDispatch, useSelector} from "react-redux";
import {updateAdditionalMembers, updateTripTeamType} from "../../slices/questionnaire.js";

function CollectTripTeamInfo() {
  const [mainCategories, setMainCategories] =
    useState(generateDefaultArr(MAIN_VARIANTS.length));
  const [additionalCategories, setAdditionalCategories] =
    useState(generateDefaultArr(ADDITIONAL_VARIANTS.length));

  const dispatch = useDispatch();

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTripTeamInfo}>
      <div className="trip-team-info">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>С кем пойдете?</PageTitle>
        <div className="trip-team-info__choice-block_main">
          {MAIN_VARIANTS.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={mainCategories[index]}
              onClick={() => {
                const currStatus = mainCategories[index];
                setMainCategories(mainCategories
                  .map((item, ind) => ind === index ? !currStatus : false));
                dispatch(updateTripTeamType(MAIN_VARIANTS[index]));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <span className="trip-team-info__subtitle">С нами будут</span>
        <div className="trip-team-info__choice-block_additional">
          {ADDITIONAL_VARIANTS.map((item, index) =>
            <QuestionnaireChoiceItem
              key={item}
              active={additionalCategories[index]}
              onClick={() => {
                const currStatus = additionalCategories[index];
                setAdditionalCategories(additionalCategories
                  .map((item, ind) => ind === index ? !currStatus : false));
                dispatch(updateAdditionalMembers(ADDITIONAL_VARIANTS[index]));
              }}
            >
              {item}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <StandardButtonsBlock navigateTo={NAV_ROUTES.collectInterestsInfo} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTripTeamInfo;
