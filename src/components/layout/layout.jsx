import React, { useEffect, useState } from "react"
// import { useMemo } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ThemeToggle } from "./../theme-toggle/theme-toggle"
import { Navbar } from "./../nav/nav"
import { Head } from "./../head/head"
import { Bio } from "./../bio/bio"
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
  const [, initOffset] = useState(0);
  const [visible, setVisible] = useState(true)

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
      <div id="layout">
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
      </div>
    </React.Fragment>
  )
}
