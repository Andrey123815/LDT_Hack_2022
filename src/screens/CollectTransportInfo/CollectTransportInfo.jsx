import React, {useState} from 'react';
import './CollectTransportInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import QuestionnaireChoiceItem from "../../UI-KIT/QuestionnaireChoiceItem/QuestionnaireChoiceItem.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {generateDefaultArr} from "../../libraries/generator.js";
import {TRANSPORT_TYPES} from "../../configurations/defaultListsItems/transportTypes.js";

function CollectTransportInfo(props) {
  const [selectedInterests, setSelectedInterests] =
    useState(generateDefaultArr(TRANSPORT_TYPES.length));

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTransportInfo}>
      <div className="transport-type">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>Как будете передвигаться?</PageTitle>
        <div className="transport-type__choice-block">
          {TRANSPORT_TYPES.map((variant, index) =>
            <QuestionnaireChoiceItem
              key={variant}
              active={selectedInterests[index]}
              onClick={() => {
                setSelectedInterests(selectedInterests
                  .map((item, ind) => ind === index ? !item : false));
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
