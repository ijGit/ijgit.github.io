import React from 'react';

import { Header } from '../header/header';

import './layout.scss';
import './../../styles/font';

export const Layout = ({location, siteData, children}) => {
  return(
    <React.Fragment>
      <div id="layout">

        <Header siteData={siteData} />
        <main>
          <div id='content'>
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}