import React, {useState} from 'react';
import './CollectTimingInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../components/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import HoursCounter from "../../components/HoursCounter/HoursCounter.jsx";

function CollectTimingInfo(props) {
  const [hoursAmount, setHoursAmount] = useState(5);

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTimingInfo}>
      <div className="timing-choice">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle>Сколько у вас есть свободного времени для маршрута?</PageTitle>
        <HoursCounter
          minus={() => setHoursAmount(hoursAmount - 1)}
          plus={() => setHoursAmount(hoursAmount + 1)}
          hours={hoursAmount}
        />
        <StandardButtonsBlock navigateTo={NAV_ROUTES.questionnaireConfirmation} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTimingInfo;
