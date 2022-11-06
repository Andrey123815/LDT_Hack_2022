import {NAV_ROUTES} from "../configurations/navigation.jsx";

export const createBalloon = (title, preview_text, pic, type) => {
  return {
    balloonContentBody: `
      <div class="balloon">
        <img class="balloon__object-img" src="${pic}" width="86px" height="116px" alt="Place image" />
        <div class="balloon__object-info">
          <div class="object-info__header">
            ${type}
          </div>
          <div class="object-info__title">
            ${title}
          </div>
          <div class="object-info__more-info-button" onclick="window.location.href ='https://www.sanviteam.tk/detailed-point-info';"><span>Подробнее</span></div>
        </div>
        <div>
          <img class="object-info__mark" src="/placemarks/${type.toLowerCase()}.svg" width="40px" height="40px" alt=""/>
        </div>
      </div>
    `,
  };
};

export function closeCurrentBalloon() {
  let close = document.querySelector('ymaps[class$="-balloon__close-button"]');
  if (close != null) {
    close.click();
  }
}
