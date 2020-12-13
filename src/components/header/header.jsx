import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import { Bio } from "./../bio/bio";
import {ThemeToggle} from "./../theme-toggle/theme-toggle";

//import styled from "styled-components"
import './header.scss'

export const Header = () => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          prefix
        }
      }
    }
`)
  return (
    <header className='header'>

      <ThemeToggle/>
      <div className='header-content'>
        <div className='header-logo'>
          <h1>
            <Link to = {data.site.siteMetadata.prefix}>
              {data.site.siteMetadata.title}
              </Link>
          </h1>
        </div>
      <Bio className='bio'/>
      </div>
    </header>
  )
}
