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
        <header className="header">
          <div className="header-contents">
            <h1 className="logo">
              <Link to={prefix}>{title}</Link>
            </h1>
            <div className='bio'>
              <Bio/>
            </div>
          </div>
          <Navbar/>
        </header>

        <main>
          <div id="content"> {children} </div>
        </main>

        
      </div>
    </React.Fragment>
  )
}

