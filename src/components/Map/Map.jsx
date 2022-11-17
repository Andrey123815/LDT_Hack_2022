import React, {useEffect, useRef, useState} from "react";
import {YMaps, Map, Clusterer, RoutePanel} from "react-yandex-maps";
import "./Map.scss";
import {API_KEY, MAP_STATE} from "../../configurations/map.js";
import {closeCurrentBalloon, createBalloon} from "../../libraries/balloon.jsx";
import {createPlacemark} from "../../libraries/placemark.js";
import {isMobile} from "../../libraries/screenTypeCheck.js";
import {PointPlacemark} from "../../UI-KIT/PointPlacemark/PointPlacemark.jsx";
import {useNavigate} from "react-router-dom";
import {NAV_ROUTES} from "../../configurations/navigation.jsx";
import {useGeolocation} from "../../libraries/geolocation.js";
import {useDispatch} from "react-redux";
import {updateRoutesInfo} from "../../slices/routesParamsSlice.js";

const AppMap = React.memo((props) => {
  const {places, routes, statusRoutes, routeToPointAvailable} = props;
  const [ymaps, setYmaps] = useState(null);
  const [myAddress, setMyAddress] = useState('');
  const [targetAddress, setTargetAddress] = useState('');
  const routeThemes = ['#1141bd', '#e5c233', '#2de5ac'];
  const mapRoutes = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [lng, ltd] = useGeolocation();

  useEffect(() => {
    if (ymaps) {
      let geocoder = ymaps.geocode([lng, ltd]);
      geocoder.then(res => setMyAddress(res.geoObjects.get(0).properties.get('text')));
    }
  }, [ymaps, lng, ltd]);

  // useEffect(() => {
  //   console.log('USE EFFECT')
  //   const distances = [];
  //   const durations = [];
  //   console.log('mapRoutes.current', mapRoutes.current)
  //   mapRoutes.current && mapRoutes.current.forEach((singlePersonalMultiRoute, idx) => {
  //     const activeRoute = singlePersonalMultiRoute.getActiveRoute();
  //     distances[idx] = activeRoute.properties.get("distance").text;
  //     durations[idx] = activeRoute.properties.get("duration").text;
  //     console.log("Длина: " + activeRoute.properties.get("distance").text);
  //     console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
  //   });
  //   console.log('FINALY', distances, durations)
  //   dispatch(updateRoutesInfo({routesDistance: distances, routesDuration: durations}));
  // }, [mapRoutes.current]);


  const getRoute = (ref, routes, statusRoutes) => {
    if (ymaps && routes) {

      console.log('statusRoutes in getRoute', statusRoutes)

      let firstAdd = true;
      statusRoutes.forEach((status, idx) => {
        console.log('status in cycle', status, 'number', idx)
        if (!status) {
          firstAdd = false;
          ref.geoObjects.remove(mapRoutes.current[idx])
          console.log('REMOVED', )
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

      // const distances1 = new Array(3);
      // const durations1 = new Array(3);

      // personalRoutesOnMap.forEach((singlePersonalMultiRoute, idx) => {
      //   singlePersonalMultiRoute.model.events.add('requestsuccess', function() {
          // Получение ссылки на активный маршрут.
          // const activeRoute = singlePersonalMultiRoute.getActiveRoute();
          // Вывод информации о маршруте.
          // const newDistances = Array.from(distances);
          // distances1[idx] = activeRoute.properties.get("distance").text;
          // const newTimings = Array.from(durations);
          // durations1[idx] = activeRoute.properties.get("duration").text;



          // console.log('newDistances', newDistances, 'newTimings', newTimings)
          // distances[idx] = activeRoute.properties.get("distance").text;
          // timings[idx] = activeRoute.properties.get("duration").text;

          // console.log(idx, newDistances[idx], newTimings[idx])

          // console.log("Длина: " + activeRoute.properties.get("distance").text);
          // console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
          // Для автомобильных маршрутов можно вывести
          // информацию о перекрытых участках.
          // if (activeRoute.properties.get("blocked")) {
          // console.log("-----------------------------------------------------");
          // }
        // });
      // });

      // setTimeout(() => {
      //   dispatch(updateRoutesInfo({routesDistance: distances1, routesDuration: durations1}))
      //   getRoutesInfo(distances1, durations1);
      // }, 3000);

      // if (distances[0] && timings[0]) {
      //   console.log('BEFORE PUSH', distances, timings)
      //   getRoutesInfo(distances, timings);
      // }
    }
  };

  const handleMoreInfoClick = () => {
    navigate(NAV_ROUTES.detailedPointInfo);
  }
  const handleBuildRouteClick = (e) => {
    let geocoder = ymaps.geocode(e.target.dataset.coords.split('-'));
    geocoder.then(res => setTargetAddress(res.geoObjects.get(0).properties.get('text')));
  }

  const showMobileVersion = isMobile();

  return (
    <>
      <YMaps query={{apikey: API_KEY}}>
        <Map
          state={MAP_STATE}
          onClick={closeCurrentBalloon}
          width="100%"
          height={showMobileVersion ? '76vh' : '100%'}
          modules={["multiRouter.MultiRoute", 'geocode']}
          instanceRef={ref => ref && getRoute(ref, routes, statusRoutes)}
          onLoad={loadedMap => setYmaps(loadedMap)}
        >
          {routeToPointAvailable && myAddress &&
            <RoutePanel
              instanceRef={ref => {
                if (ref) {
                  ref.routePanel.state.set({
                    fromEnabled: false,
                    from: myAddress,
                    to: targetAddress,
                  });
                  ref.routePanel.options.set({
                    autofocus: false
                  });
                }
              }}
            />
          }
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
                  <PointPlacemark
                    key={title + idx}
                    geometry={coordinates}
                    title={title}
                    preview_text={preview_text}
                    pic={pic}
                    type_place={type_place}
                    type={type}
                    coordinates={coordinates}
                    handleMoreInfoClick={handleMoreInfoClick}
                    handleBuildRouteClick={handleBuildRouteClick}
                    routeToPointAvailable={routeToPointAvailable}
                    options={createPlacemark(type_place || type)}
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
