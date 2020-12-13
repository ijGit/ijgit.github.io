import React, { useEffect, useState, useMemo } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar } from "./../nav/nav"
import { Head } from "./../head/head"
import { Bio } from "./../bio/bio"
import { useColorMode } from 'theme-ui';

import "./layout.scss"


export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          prefix
        }
      }
    }
  `)
  

  // for scroll 
  const [, initOffset] = useState(0);
  const [visible, setVisible] = useState(true)


  // for header color
  const [colorMode] = useColorMode();
  const theme = useMemo(() => colorMode === 'dark', [colorMode]);


  useEffect(() => {
    const setOffset = () => {
      initOffset(prevOffset => {
        const curOffset = window.pageYOffset
        if (curOffset > 0) setVisible(prevOffset > curOffset)
        return curOffset
      });
    };
    document.addEventListener("scroll", setOffset);
    return () => document.removeEventListener("scroll", setOffset);
  }, []);

  const { title, prefix } = data.site.siteMetadata
  return (
    <React.Fragment>
      <div id="layout" className={theme ? 'dark' : 'light'}>
        <Head />
          <header id="header" className={`${visible ? 'visible' : 'invisible'}`}>
            <div className='header-contents'>
              <h1 className="logo">
                <Link to={prefix}>{title}</Link>
              </h1>
              <div className="bio">
                <Bio />
              </div>
            </div>
            <Navbar />
          </header>
        <main>{children}</main>
        <footer/>
      </div>
    </React.Fragment>
  )
}
