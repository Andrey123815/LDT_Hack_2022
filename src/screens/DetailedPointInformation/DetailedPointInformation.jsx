import React, {useState} from 'react';
import './DetailedPointInformation.scss';
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import TitleSwitcher from "../../components/TitleSwitcher/TitleSwitcher.jsx";
import BackToMapButton from "../../UI-KIT/BackToMapButton/BackToMapButton.jsx";
import BonusSystemBanner from "../../components/BonusSystemBanner/BonusSystemBanner.jsx";
import AccentButton from "../../UI-KIT/AccentButton/AccentButton.jsx";
import BackQuestionnaireArrow from "../../UI-KIT/BackQuestionnaireArrow/BackQuestionnaireArrow.jsx";

const TITLE_SWITCHER_ITEMS = {
  'Описание объекта': 'Невозможно не заметить на ВДНХ павильон «Космос» – это действительно уникальное здание и архитектурная гордость. Его история началась 1 августа 1939 года, только тогда он назывался «Механизация» и выглядел иначе – это был огромный ангар. Современный вид павильон обрел только в 1954-м. Именно тогда над зданием появился знаменитый купол. Он опирался на четыре мощные арки, а в центре поставили звезду с Троицкой башни московского Кремля. В 1967 году павильон получил нынешнее название – «Космос», а перед зданием установили полноразмерный макет ракеты-носителя «Восток» в масштабе 1:1.\n\tВысота макета составляет 38 метров. Павильон пережил не одно переименование и смену экспозиции, а в 2018 году предстал перед посетителями ВДНХ во всей красе после масштабной реставрации.',
  'История': 'Многие считают ракету, установленную перед павильоном "Космос" в 1968 году, техническим символом ВДНХ. Размещением этой громады (высотой с 16-этажный дом) занимался академик Владимир Бармин, соратник Сергея Королева. Поначалу ракета находилась в вертикальном положении только днем, а на ночь, когда выставка закрывалась, ее опускали. Так было, пока ракету окончательно не зафиксировали в вертикальном положении.\nРакета, созданная в 1958 году, в космос полетела лишь с четвертой попытки. Всего было 26 запусков. Самый известный - 12 апреля 1961 года, когда "Восток" вывел в космос корабль-спутник с Юрием Гагариным.\n',
  'Легенда': 'В центре «Космонавтика и авиация» можно увидеть более 120 уникальных образцов летательной и космической техники, экспонаты оборонно-промышленных предприятий, свыше 2 тысяч редких архивных документов, фотографий и видеоматериалов об истории космических достижений. Также в павильоне работает сувенирный магазин ВДНХ.\nС правилами посещения музейно-выставочных площадок можно ознакомиться по ссылке.'
};

function DetailedPointInformation(props) {
  const [activeTitle, setActiveTitle] = useState(Object.keys(TITLE_SWITCHER_ITEMS)[0]);
  return (
    <div className="detailed-point-information">
      <MainHeader />
      <div className="detailed-point-information__main-content">
        <div className="main-content__info">
          <BackToMapButton>Вернуться на карту</BackToMapButton>
          <header className="info__object-name">{'Павильон №34. Центр «Космонавтика и авиация»'}</header>
          <div className="info__control-line">
            <TitleSwitcher
              titles={Object.keys(TITLE_SWITCHER_ITEMS)}
              activeTitle={activeTitle}
              setActiveTitle={setActiveTitle}
            />
            <div className="control-line__control-buttons">
              <img src="/icons/share-object.svg"  alt="share object"/>
              <img src="/icons/bookmark.svg"  alt="bookmark"/>
            </div>
          </div>
          <article className="info__object-description">
            {TITLE_SWITCHER_ITEMS[activeTitle]}
          </article>
          <div className="info__control-buttons">
            <AccentButton>Я иду сюда!</AccentButton>
            <AccentButton theme="white">Купить билет</AccentButton>
          </div>
          <BonusSystemBanner />
        </div>
        <div className="main-content__pictures">
          <img src="/images/test-img.jpg" width="100%"  alt=""/>
          <div className="pictures__switch-block">
            <BackQuestionnaireArrow />
            <BackQuestionnaireArrow direction="right" />
            {/*<BackQuestionnaireArrow direction="right" />*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedPointInformation;
