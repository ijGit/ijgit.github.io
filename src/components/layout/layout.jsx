import React from "react"
// import { useMemo } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ThemeToggle } from "./../theme-toggle/theme-toggle"
import { Navbar } from './../nav/nav'
import { Head } from "./../head/head"
import { Bio } from "./../bio/bio"
import "./layout.scss"

export const Layout = ({ children}) => {

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
  const {title, prefix} = data.site.siteMetadata;
  return (
    <React.Fragment>
      <div id="layout">
        <Head />
        <div className='top-bar'>
          <header className="header">
              <h1 className="logo">
                <Link to={prefix}>{title}</Link>
              </h1>
              <div className='bio'>
                <Bio/>
              </div>
          </header>
          <Navbar/>
        </div>
        <main>
          {children}
        </main>
      </div>
    </React.Fragment>
  )
}

