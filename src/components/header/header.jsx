import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import './header.scss'


const LogoWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;

  margin: 0;
  padding: 0;
  margin-left: 2vw;
`

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
    <header id='header'>
      <div className="header-content">
        <LogoWrapper>
          <h1>
            <Link to = {data.site.siteMetadata.prefix}>
              {data.site.siteMetadata.title}
              </Link>
          </h1>
        </LogoWrapper>
      </div>
    </header>
  )
}