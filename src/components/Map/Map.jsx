import React, {useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import "./Map.scss";
import {API_KEY, MAP_STATE} from "../../configurations/map.js";
import {closeCurrentBalloon, createBalloon} from "../../libraries/balloon.jsx";
import {createPlacemark} from "../../libraries/placemark.js";
import {isMobile} from "../../libraries/screenTypeCheck.js";

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

  const showMobileVersion = isMobile();

  return (
    <>
      <YMaps query={{apikey: API_KEY}}>
        <Map
          state={MAP_STATE}
          onClick={closeCurrentBalloon}
          width="100%"
          height={showMobileVersion ? '76vh' : '100%'}
          modules={["multiRouter.MultiRoute"]}
          instanceRef={ref => ref && getRoute(ref, routes, statusRoutes)}
          onLoad={loadedMap => setYmaps(loadedMap)}
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
            {places && places.length && (props.allPoints ? places :
              places.filter((routePoints, index) => statusRoutes[index])
                .reduce(
                  (arr, currentValue) => {return arr.concat(currentValue)},
                  []
                ))
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
    </>
  );
});

export default AppMap;
