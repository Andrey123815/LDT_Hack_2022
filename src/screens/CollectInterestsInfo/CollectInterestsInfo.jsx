import React from 'react';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import './CollectInterestsInfo.scss';
import {useDispatch, useSelector} from "react-redux";
import {updateInterests} from "../../slices/questionnaireSlice.js";

export const INTERESTS = [
  'Прогулка', 'Активность', 'Природа', 'Наука', 'Национальный колорит',
  'Ремесло', 'Творчество', 'Для детей', 'Технологии', 'Моя страна',
];

function CollectInterestsInfo() {
  const dispatch = useDispatch();
  const selectedInterests = useSelector(
    state => state.questionnaire.questionnaireChoice.interests
  );

  console.log(selectedInterests)

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectInterestsInfo}>
      <div className="interest-info">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>Отметьте, что вас интересует?</PageTitle>
        <div className="interest-info__choice-block">
          {INTERESTS.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={selectedInterests[variant]}
              onClick={() => {
                const newObj = Object.assign({}, selectedInterests);
                newObj[variant] = !selectedInterests[variant];
                dispatch(updateInterests(newObj));
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
