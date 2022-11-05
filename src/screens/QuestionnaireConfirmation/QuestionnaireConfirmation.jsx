import React from 'react';
import './QuestionnaireConfirmation.scss';
import QuestionnaireTemplate, {TEMPLATE_TYPE} from "../../screenTemplates/QuestionnaireTemplate/QuestionnaireTemplate.jsx";
import QuestionnaireHeaderIcon from "../../UI-KIT/QuestionnaireHeaderIcon/QuestionnaireHeaderIcon.jsx";
import PageTitle from "../../UI-KIT/PageTitle/PageTitle.jsx";
import FinalChoiceItemsBlock from "../../components/FinalChoiceItemsBlock/FinalChoiceItemsBlock.jsx";
import SimpleButton from "../../UI-KIT/SimpleButton/SimpleButton.jsx";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPersonalRoutes} from "../../api/personalRoutesAPI.js";

const blocks = ['Компания', 'Интересы', 'Передвижение', 'Свободное время'];
const types = ['company', 'interests', 'transport', 'free-time'];

function QuestionnaireConfirmation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questionnaireAnswers = useSelector(state => state.questionnaire.questionnaireChoice);

  const pickUpPersonalRoute = () => {
    dispatch(fetchPersonalRoutes(questionnaireAnswers))
      .then(() =>
        navigate(NAV_ROUTES.personalRoutes)
      );
  }

  const questionnaire = useSelector(state => state.questionnaire.questionnaireChoice);
  const resultQuestionnaireArray = new Array([]);
  let i = 0;
  for (let key in questionnaire) {
    if (questionnaire[key]) {
      if (i <= 1) {
        resultQuestionnaireArray[0].push(questionnaire[key]);
        i++;
        continue;
      }
      resultQuestionnaireArray.push(questionnaire[key]);
    }
  }

  return (
    <QuestionnaireTemplate page={TEMPLATE_TYPE.personalRouteInvitation}>
      <div className="personal-route-invitation">
        <QuestionnaireHeaderIcon size='small' smallMargin={true} />
        <PageTitle withoutMargin={true}>Давайте сверимся, всё верно?</PageTitle>
        <div className="personal-route-invitation__item-blocks">
          {resultQuestionnaireArray.map((data, index) =>
            <FinalChoiceItemsBlock key={blocks[index]} block={blocks[index]} type={types[index]} data={data}/>
          )}
        </div>
      </div>
      <SimpleButton onClick={pickUpPersonalRoute}>Далее</SimpleButton>
    </QuestionnaireTemplate>
  );
}

export default QuestionnaireConfirmation;
