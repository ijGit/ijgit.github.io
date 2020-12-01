import React from 'react';

import {Header} from '../header/header';
import {Head} from './../head/head';

import './layout.scss';
import './../../styles/font';

// title, keywords, description, category
//export const Layout = ({location, siteData, children}) => {
export const Layout = ({root, category, title, children}) => {

//  var titleTemplate = (root != title) ? `${root}|${title}` : `${root}`


  return(
    <React.Fragment>
      <Head title={title}/>
      <div id="layout">
        <Header title={root} category={category} />
        <main>
          <div id='content'>  {children}  </div>
        </main>
      </div>
    </React.Fragment>
  )
}    
  