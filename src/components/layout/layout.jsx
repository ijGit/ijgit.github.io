import React from 'react';

import { Header } from '../header/header';
import { Head } from '../head/head';

import './layout.scss';
import './../../styles/font';

export const Layout = ({location, siteData, children}) => {
  // Head({ description, lang, meta, keywords, title }


  return(
    <React.Fragment>
      <div id="layout">
        <Head />
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