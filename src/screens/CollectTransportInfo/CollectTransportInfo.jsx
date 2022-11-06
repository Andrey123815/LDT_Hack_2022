import React, {useState} from 'react';
import './CollectTransportInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {TRANSPORT_TYPES} from "../../configurations/defaultListsItems/transportTypes.js";
import {useDispatch, useSelector} from "react-redux";
import {updateTransport} from "../../slices/questionnaireSlice.js";

function CollectTransportInfo() {
  const [selectedTransport, setSelectedTransport] =
    useState(useSelector(state => state.questionnaire.questionnaireChoice.transport));

  const dispatch = useDispatch();

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTransportInfo}>
      <div className="transport-type">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle withoutMargin={true}>Как будете передвигаться?</PageTitle>
        <div className="transport-type__choice-block">
          {TRANSPORT_TYPES.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={selectedTransport === TRANSPORT_TYPES[index]}
              onClick={() => {
                setSelectedTransport(selectedTransport === TRANSPORT_TYPES[index]
                  ? ''
                  : TRANSPORT_TYPES[index]
                )
                dispatch(updateTransport(selectedTransport));
              }}
            >
              {variant}
            </QuestionnaireChoiceItem>
          )}
        </div>
        <StandardButtonsBlock navigateTo={NAV_ROUTES.collectTimingInfo} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTransportInfo;
