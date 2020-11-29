import React from 'react';

import { Header } from '../header/header';

import './layout.scss';

export const Layout = ({location, siteData, children}) => {
  return(
    <React.Fragment>
      
      <Header siteData={siteData} />
      <main>
        <div id='content'>
          {children}
        </div>
      </main>
    </React.Fragment>
  )
}