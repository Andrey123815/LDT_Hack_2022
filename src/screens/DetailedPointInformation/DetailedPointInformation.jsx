import React, {useState} from 'react';
import './DetailedPointInformation.scss';
import PointCardHeader from "../../components/PointCardHeader/PointCardHeader.jsx";
import TitleSwitcher from "../../components/TitleSwitcher/TitleSwitcher.jsx";
import BackToMapButton from "../../UI-KIT/BackToMapButton/BackToMapButton.jsx";
import BonusSystemBanner from "../../components/BonusSystemBanner/BonusSystemBanner.jsx";
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";

const TITLE_SWITCHER_ITEMS = [
  'Описание объекта',
  'История',
  'Легенда'
];

const startState = [true, false, false];

function DetailedPointInformation(props) {
  const [titlesStatus, setTitlesStatus] = useState(startState);
  return (
    <div className="detailed-point-information">
      <PointCardHeader />
      <div className="detailed-point-information__main-content">
        <div className="main-content__info">
          <BackToMapButton>Обратно к карте</BackToMapButton>
          <header className="info__object-name">{props.pointName || 'Павильон №34. Центр «Космонавтика и авиация»'}</header>
          <div className="info__control-line">
            <TitleSwitcher
              titles={TITLE_SWITCHER_ITEMS}
              titlesStatus={titlesStatus}
              setTitlesStatus={setTitlesStatus}
            />
            <div className="control-line__control-buttons">
              <img src="/icons/share-object.svg"  alt="share object"/>
              <img src="/icons/bookmark.svg"  alt="bookmark"/>
            </div>
          </div>
          <article className="info__object-description">
            В центре «Космонавтика и авиация» можно увидеть более 120 уникальных образцов летательной и космической техники, экспонаты оборонно-промышленных предприятий, свыше 2 тысяч редких архивных документов, фотографий и видеоматериалов об истории космических достижений. Также в павильоне работает сувенирный магазин ВДНХ. <br/><br/>С правилами посещения музейно-выставочных площадок можно ознакомиться по ссылке.
          </article>
          <AccentButton>Я иду сюда!</AccentButton>
          <BonusSystemBanner />
        </div>
        <div className="main-content__pictures">
          <img src="/images/test-img.jpg" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default DetailedPointInformation;
