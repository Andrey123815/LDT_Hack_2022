import React, {useEffect} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import "./Map.scss";
import {useSelector} from "react-redux";

const mapState = {
  center: [55.831818, 37.628951],
  zoom: 14,
  behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
  return {
    balloonContentBody: `placemark <strong>balloon ${index}</strong>`,
    clusterCaption: `placemark <strong>${index}</strong>`
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#redIcon"
  };
};

const AppMap = React.memo(() => {
  const places = useSelector(state => state.places.places);

  return (
    <div className="layer">
      <div style={{height: "100px"}}></div>
      <YMaps>
        <Map
          state={mapState}
          width="100%"
          height="100%"
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
            {places && places.filter(({coordinates}) => coordinates !== undefined).map(({coordinates}, idx) => (
              <Placemark
                key={idx}
                geometry={coordinates}
                properties={getPointData(idx)}
                options={getPointOptions()}
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
