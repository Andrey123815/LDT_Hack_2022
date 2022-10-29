import React from 'react';
import './PageTitle.scss';

function PageTitle(props) {
  return (
    <div className="page-title">
      {props.children}
    </div>
  );
}

export default PageTitle;
