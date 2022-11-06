import React from 'react';
import './QuestionnaireConfirmation.scss';
import QuestionnaireTemplate, {
  TEMPLATE_TYPE
} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import FinalChoiceItemsBlock from "../../components/FinalChoiceItemsBlock/FinalChoiceItemsBlock.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPersonalRoutes} from "../../api/personalRoutesAPI.js";
import {INTERESTS} from "../CollectInterestsInfo/CollectInterestsInfo.jsx";

const blockViewTypes = {
  tripTeamType: 'company',
  additionalMembers: 'company',
  interests: 'interests',
  transport: 'transport',
  freeTime: 'free-time',
};

const blockTitles = {
  tripTeamType: 'Компания',
  additionalMembers: 'Компания',
  interests: 'Интересы',
  transport: 'Передвижение',
  freeTime: 'Свободное время',
};

function QuestionnaireConfirmation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questionnaire = useSelector(state => state.questionnaire.questionnaireChoice);

  const pickUpPersonalRoute = () => {
    dispatch(fetchPersonalRoutes(questionnaire))
      .then(() =>
        navigate(NAV_ROUTES.personalRoutes)
      );
  }

  const resultQuestionnaireArray = [];
  let flagAlreadyPushed = false;
  for (let key in questionnaire) {
    if (key === 'tripTeamType' || key === 'additionalMembers') {
      if (questionnaire[key]) {
        if (!flagAlreadyPushed) {
          resultQuestionnaireArray.push({
            title: blockTitles[key],
            res: [questionnaire[key]],
            viewType: blockViewTypes[key]
          });
          flagAlreadyPushed = true;
        } else {
          resultQuestionnaireArray[0].res.push(questionnaire[key]);
        }
      }
      continue;
    }
    resultQuestionnaireArray.push({
      title: blockTitles[key],
      res: key === 'interests'
        ? Object.entries(questionnaire[key]).map(([key, value]) => value && key)
        : questionnaire[key],
      viewType: blockViewTypes[key]
    });
  }

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='small' smallMargin={true}/>
        <PageTitle withoutMargin={true}>Давайте сверимся, всё верно?</PageTitle>
        <div className="personal-route-invitation__item-blocks">
          {resultQuestionnaireArray.map((data, index) =>
            <FinalChoiceItemsBlock
              key={data.title + index} title={data.title}
              type={data.viewType} res={data.res}
            />
          )}
        </div>
      </div>
      <SimpleButton onClick={pickUpPersonalRoute}>Далее</SimpleButton>
    </QuestionnaireTemplate>
  );
}

export default QuestionnaireConfirmation;
