import React, {useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import "./Map.scss";
import {API_KEY, MAP_STATE} from "../../configurations/map.js";
import {closeCurrentBalloon, createBalloon} from "../../libraries/balloon.jsx";
import {createPlacemark} from "../../libraries/placemark.js";

const AppMap = React.memo((props) => {
  const {places, routes, statusRoutes} = props;
  const [ymaps, setYmaps] = useState(null);
  const routeThemes = ['#1141bd', '#e5c233', '#2de5ac'];
  const mapRoutes = useRef(null);

  const getRoute = (ref, routes, statusRoutes) => {
    if (ymaps && routes) {

      let firstAdd = true;
      statusRoutes.forEach((status, idx) => {
        if (!status) {
          firstAdd = false;
          ref.geoObjects.remove(mapRoutes.current[idx])
        } else if (mapRoutes.current && mapRoutes.current[idx]) {
          ref.geoObjects.add(mapRoutes.current[idx])
        }
      })

      if (!firstAdd) {
        return;
      }

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
              results: 2,
              routingMode: 'pedestrian'
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

  return (
    <div className="layer">
      <YMaps query={{apikey: API_KEY}}>
        <Map
          state={MAP_STATE}
          onClick={closeCurrentBalloon}
          width="100%"
          height="100vh"
          modules={["multiRouter.MultiRoute"]}
          instanceRef={ref => ref && getRoute(ref, routes, statusRoutes)}
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
                const {coordinates, title, preview_text, pic, type_place, type} = place;
                return (
                  <Placemark
                    key={title + idx}
                    geometry={coordinates}
                    properties={createBalloon(title, preview_text, pic, type_place || type)}
                    options={createPlacemark(type_place || type)}
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
