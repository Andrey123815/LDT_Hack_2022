import React from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import "./Map.scss";
import {useSelector} from "react-redux";

const mapState = {
  center: [55.831818, 37.628951],
  zoom: 14,
  behaviors: ["default", "scrollZoom"],
};

const createBalloon = (title, preview_text, pic, type) => {
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
          <div class="object-info__more-info-button"><span>Подробнее</span></div>
        </div>
        <div>
          <img class="object-info__mark" src="/placemarks/${type.toLowerCase()}.svg" width="40px" height="40px" alt=""/>
        </div>
      </div>
    `,
  };
};

function closeCurrentBalloon() {
  let close = document.querySelector('ymaps[class$="-balloon__close-button"]');
  if (close != null) {
    close.click();
  }
}

const createPlacemark = (type) => {
  return {
    iconLayout: 'default#image',
    iconImageHref: `/placemarks/${type.toLowerCase()}.svg`,
    iconImageSize: [70, 70],
  };
};

const AppMap = React.memo(() => {
  const places = useSelector(state => state.places.places);

  return (
    <div className="layer">
      <YMaps>
        <Map
          state={mapState}
          onClick={closeCurrentBalloon}
          width="100%"
          height="100vh"
        >
          <Clusterer
            options={{
              preset: "islands#invertedRedClusterIcons",
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false
            }}
          >
            {places && places
              .filter(({coordinates}) => coordinates !== undefined)
              .map(({coordinates, title, preview_text, pic, type}, idx) => (
                <Placemark
                  key={idx}
                  geometry={coordinates}
                  properties={createBalloon(title, preview_text, pic, type)}
                  options={createPlacemark(type)}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />
              ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
});

export default AppMap;

{/*<YMaps>*/
}
{/*  <Map state={mapState1}>*/
}

{/*<Placemark*/
}
{/*  geometry={{*/
}
{/*    coordinates: [55.751574, 37.573856]*/
}
{/*  }}*/
}
{/*  properties={{*/
}
{/*    hintContent: 'Собственный значок метки',*/
}
{/*    balloonContent: 'Это красивая метка'*/
}
{/*  }}*/
}
{/*  options={{*/
}
{/*    iconLayout: 'default#image',*/
}
{/*    iconImageHref: 'images/myIcon.gif',*/
}
{/*    iconImageSize: [30, 42],*/
}
{/*    iconImageOffset: [-3, -42]*/
}
{/*  }}*/
}
{/*/>*/
}

{/*  </Map>*/
}
{/*</YMaps>*/
}

// // <YMaps onApiAvaliable={() => handleApiAvailable(ymaps)}>*/}
//   {/*  <Map*/}
//   {/*    state={mapState2}*/}
//   {/*    instanceRef={ref => (map = ref)}*/}
//   {/*    height="100%"*/}
//   {/*    width="100%">*/}
//   {/*  </Map>*/}
//   {/*</YMaps>*/}
//   {/*<button onClick={addRoute}>Add route</button>*/}
//   {/*<button onClick={removeRoute}>Delete route</button>


//   const addRoute = () => {
//   if (ymaps && map) {
//     ymaps
//       .route(["Южное Бутово", "Москва, метро Парк Культуры"], {
//         multiRoute: true
//       })
//       .then(route => {
//         // route = route;
//         map.geoObjects.add(route);
//       });
//   }
// };
//
// const removeRoute = () => {
//   if (map && route) {
//     map.geoObjects.remove(route);
//   }
// };

// const handleApiAvailable = ymaps => {
//   ymaps = ymaps;
//   const balloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
//     "<div>Test</div>"
//   );
//   ymaps
//     .route(
//       [
//         "Королев",
//         {type: "viaPoint", point: "Мытищи"},
//         "Химки",
//         {type: "wayPoint", point: [55.811511, 37.312518]}
//       ],
//       {balloonContentBodyLayout}
//     )
//     .then(route => {
//       route.getPaths().options.set({
//         // в балуне выводим только информацию о времени движения с учетом пробок
//         // можно выставить настройки графики маршруту
//         strokeColor: "0000ffff",
//         opacity: 0.9
//       });
//
//       // добавляем маршрут на карту
//       map.geoObjects.add(route);
//     });
// };
