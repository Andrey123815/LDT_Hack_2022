import React from 'react';
import $ from 'jquery';
import {Placemark, withYMaps} from "react-yandex-maps";
import './PointPlacemark.scss';
import {createBalloon} from "../../libraries/balloon.jsx";

function PointPlacemark(props) {
  const UserPlacemarkCore = React.memo(({ymaps}) => {
    const makeLayout = (layoutFactory) => {
      const Layout = layoutFactory.createClass(
        createBalloon(props),
        {
          build: function() {
            Layout.superclass.build.call(this);
            $(document).on('click', '#get-more-info-button', $.proxy(this.handleMoreInfoClick, this));
            $(document).on('click', '#build-route-button', $.proxy(this.handleBuildRouteClick, this));
          },

          clear: function() {
            $(document).off('click', '#get-more-info-button');
            $(document).off('click', '#build-route-button');

            Layout.superclass.clear.call(this);
          },

          handleMoreInfoClick: props.handleMoreInfoClick,
          handleBuildRouteClick: props.handleBuildRouteClick,
        },
      );
      return Layout;
    };

    return (
      <Placemark
        {...props}
        options={{
          balloonContentLayout: makeLayout(ymaps.templateLayoutFactory),
          // balloonPanelMaxMapArea: 0,
          ...props.options,
        }}
      />
    );
  });

  const PointPlacemark = React.useMemo(() => {
    return withYMaps(
      UserPlacemarkCore,
      true,
      ["geoObject.addon.balloon", "geoObject.addon.hint", "templateLayoutFactory"]);
  }, [UserPlacemarkCore]);
  return <PointPlacemark/>;
}

export {PointPlacemark};
