import React, {useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import "./Map.scss";

const mapState = {
  center: [55.831818, 37.628951],
  // zoom: 14,
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

const AppMap = React.memo((props) => {
  const {places, routes} = props;
  const [ymaps, setYmaps] = useState(null);
  const routeThemes = ['#336AF7', '#6dd0b1', '#E22C38'];
  const mapRoutes = useRef(null);

  const getRoute = (ref, routes) => {
    if (ymaps && routes) {
      const personalRoutesOnMap = [];
      let i = 0;
      for (let route of routes) {
        const routePointsCoordinates = route.main.map(({coordinates}) => coordinates);

        const multiRoute = new ymaps.multiRouter.MultiRoute(
          {
            // Описание опорных точек мультимаршрута.
            referencePoints: routePointsCoordinates,
            // Параметры маршрутизации.
            params: {
              // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
              results: 2
            }
          },
          {
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            boundsAutoApply: true,
            // Внешний вид линии маршрута.
            routeStrokeWidth: 2,
            routeStrokeColor: "#000088",
            routeActiveStrokeWidth: 6,
            routeActiveStrokeColor: routeThemes[i],
            viaPointDraggable: true,
            pinVisible: true,
            routeActivePedestrianSegmentStrokeStyle: 'dashed'
          }
        );
        personalRoutesOnMap.push(multiRoute);
        i++;
      }
      // Кладем полученный маршрут в переменную
      mapRoutes.current = personalRoutesOnMap;
      personalRoutesOnMap.forEach((singlePersonalMultiRoute) => ref.geoObjects.add(singlePersonalMultiRoute));
    }
  };

  mapState.zoom = props.zoom;

  return (
    <div className="layer">
      <YMaps query={{apikey: '2d683523-0eda-4943-91e0-73597aca4777'}}>
        <Map
          state={mapState}
          onClick={closeCurrentBalloon}
          width="100%"
          height="100vh"
          modules={["multiRouter.MultiRoute"]}
          instanceRef={ref => ref && getRoute(ref, routes)}
          onLoad={ymaps => setYmaps(ymaps)}
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
              .map((place, idx) => {
                const {coordinates, title, preview_text, pic, type_place} = place;
                return (
                  <Placemark
                    key={title + idx}
                    geometry={coordinates}
                    properties={createBalloon(title, preview_text, pic, type_place)}
                    options={createPlacemark(type_place)}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                  />
                );
              })}
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
