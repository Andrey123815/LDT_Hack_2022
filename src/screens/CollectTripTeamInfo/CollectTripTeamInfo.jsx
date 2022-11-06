import React from 'react';
import './CollectTripTeamInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {MAIN_VARIANTS, ADDITIONAL_VARIANTS} from "../../configurations/defaultListsItems/teamTrip.js";
import {useDispatch, useSelector} from "react-redux";
import {updateAdditionalMembers, updateTripTeamType} from "../../slices/questionnaireSlice.js";

function CollectTripTeamInfo() {
  const dispatch = useDispatch();
  const mainTeamMembers = useSelector(
    state => state.questionnaire.questionnaireChoice.tripTeamType
  );
  const additionalTeamMembers = useSelector(
    state => state.questionnaire.questionnaireChoice.additionalMembers
  );

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTripTeamInfo}>
      <div className="trip-team-info">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>С кем пойдете?</PageTitle>
        <div className="trip-team-info__choice-block_main">
          {MAIN_VARIANTS.map(variant =>
            <QuestionnaireChoiceItem
              key={variant}
              active={variant === mainTeamMembers}
              onClick={() => {
                dispatch(updateTripTeamType(variant));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <span className="trip-team-info__subtitle">С нами будут</span>
        <div className="trip-team-info__choice-block_additional">
          {ADDITIONAL_VARIANTS.map(variant =>
            <QuestionnaireChoiceItem
              key={variant}
              active={variant === additionalTeamMembers}
              onClick={() => {
                dispatch(updateAdditionalMembers(variant));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <StandardButtonsBlock navigateTo={NAV_ROUTES.collectInterestsInfo} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTripTeamInfo;
