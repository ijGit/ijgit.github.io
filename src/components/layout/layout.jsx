import React from 'react';

import {Header} from '../header/header';
import {Head} from './../head/head';

import './layout.scss';
import './../../styles/font';


//export const Layout = ({location, siteData, children}) => {
export const Layout = ({metaData, postData, children}) => {

  return(
    <React.Fragment>
      <Head description={metaData.description}
            keywords={metaData.keywords}/>
      <div id="layout">
        <Header title={postData.title} category={postData.category} />
        <main>
          <div id='content'>  {children}  </div>
        </main>
      </div>
    </React.Fragment>
  )
}    
  