import React from 'react';
import './PageTitle.scss';
import {isMobile} from "../../libraries/screenTypeCheck.js";

function PageTitle(props) {
  return (
    <div className="page-title"
         style={{marginTop:
             !isMobile() && props.marginTop && !props.withoutMargin
               ? props.marginTop
               : props.withoutMargin ? '0' : '20px', width: props.width}}>
      {props.children}
    </div>
  );
}

export default PageTitle;
