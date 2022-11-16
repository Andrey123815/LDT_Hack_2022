import {CATEGORY_THEME_MAP} from "../configurations/categoryPlacemarkThemes.js";

export const createBalloon = (title, preview_text, pic, category, isRouteBalloon) => {
  const balloonType = isRouteBalloon ? '_route-balloon' : '';
  return {
    balloonContentBody: `
      <div class="balloon${balloonType}">
        <img class="balloon__object-img" src="${pic}" width="86px" height="116px" alt="Place image" />
        <div class="balloon__object-info">
          <div class="object-info__header">
            ${category}
          </div>
          <div class="object-info__title">
            ${title}
          </div>
          ${isRouteBalloon 
            ? `<div class="button-panel">
                  <div class="button-panel__button_small gradient" onclick="window.location.href ='https://www.sanviteam.tk/detailed-point-info';">
                    Подробнее
                  </div>
                  <div class="button-panel__button_small blue" onclick="window.location.href ='https://www.sanviteam.tk/detailed-point-info';">
                    <span>Построить маршрут</span>
                  </div>
                </div>`
            : `<div class="button-panel__button_large" onclick="window.location.href ='https://www.sanviteam.tk/detailed-point-info';">
                  Подробнее
                </div>`
          }
        </div>
        <div class="placemark-type__icon">
          <img class="object-info__mark" src="/placemarks/${category.toLowerCase()}.svg" width="40px" height="40px" alt=""/>
        </div>
        <div style="background: ${CATEGORY_THEME_MAP[category]}" class="balloon-border"></div>
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
