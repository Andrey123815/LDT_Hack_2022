import {CATEGORY_THEME_MAP} from "../configurations/categoryPlacemarkThemes.js";

export const createBalloon = ({title, pic, type_place, type, coordinates, routeToPointAvailable}) => {
  const category = type_place || type;
  const balloonType = routeToPointAvailable ? '_route-balloon' : '';
  return `
    <div class="balloon${balloonType}">
      <img class="balloon__object-img" src="${pic}" width="86px" height="116px" alt="Place image" />
      <div class="balloon__object-info">
        <div class="object-info__header">
          ${category}
        </div>
        <div class="object-info__title">
          ${title}
        </div>
        ${routeToPointAvailable 
          ? `<div class="button-panel">
                <div id="get-more-info-button" class="button-panel__button_small gradient">
                  Подробнее
                </div>
                <div id="build-route-button" data-coords="${coordinates.join('-')}" class="button-panel__button_small blue">
                  Построить маршрут
                </div>
              </div>`
          : `<div id="get-more-info-button" class="button-panel__button_large">
                Подробнее
              </div>`
        }
      </div>
      <div class="placemark-type__icon">
        <img class="object-info__mark" src="/placemarks/${category.toLowerCase()}.svg" width="40px" height="40px" alt=""/>
      </div>
      <div style="background: ${CATEGORY_THEME_MAP[category]}" class="balloon-border"></div>
    </div>
  `;
};

export function closeCurrentBalloon() {
  let close = document.querySelector('ymaps[class$="-balloon__close-button"]');
  if (close != null) {
    close.click();
  }
}
