import React from 'react';

import { Header } from '../header/header';


export const Layout = ({location, siteData, children}) => {
  return(
    <React.Fragment>
      
      <Header siteData={siteData} />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}