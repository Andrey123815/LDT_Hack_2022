import React, {useEffect, useState} from 'react';
import './CollectTimingInfo.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import StandardButtonsBlock from "../../components/StandardButtonsBlock/StandardButtonsBlock.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import HoursCounter from "../../components/HoursCounter/HoursCounter.jsx";
import {isMobile} from "../../libraries/screenTypeCheck";
import {useDispatch, useSelector} from "react-redux";
import {updateFreeTime} from "../../slices/questionnaireSlice.js";

function CollectTimingInfo() {
  const [hoursAmount, setHoursAmount] = useState(
    useSelector(state => state.questionnaire.questionnaireChoice.freeTime)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFreeTime(hoursAmount));
  }, [hoursAmount]);

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.collectTimingInfo}>
      <div className="timing-choice">
        <QuestionnaireHeaderIcon size='small' />
        <PageTitle width={isMobile() && '80%' || '60%'} withoutMargin={true}>Сколько у вас есть свободного времени для маршрута?</PageTitle>
        <HoursCounter
          minus={() => setHoursAmount(hoursAmount >= 2 ? hoursAmount - 1 : 1)}
          plus={() => setHoursAmount(hoursAmount + 1)}
          hours={hoursAmount}
        />
        <StandardButtonsBlock navigateTo={NAV_ROUTES.questionnaireConfirmation} />
      </div>
    </QuestionnaireTemplate>
  );
}

export default CollectTimingInfo;
