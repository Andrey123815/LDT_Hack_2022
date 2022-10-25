import React from 'react';
import {NavLink} from "react-router-dom";

function RouteSelection() {
  return (
    <div>
      Route Selection
      <NavLink to={'/'}>Обратно</NavLink>
    </div>
  );
}

export default RouteSelection;
