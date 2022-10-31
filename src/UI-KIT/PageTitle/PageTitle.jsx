import React from 'react';
import './PageTitle.scss';

function PageTitle(props) {
  return (
    <div className="page-title" style={{marginTop: props.withoutMargin ? '0' : '20px'}}>
      {props.children}
    </div>
  );
}

export default PageTitle;
