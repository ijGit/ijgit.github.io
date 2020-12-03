import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Bio } from "./../bio/bio";

import styled from "styled-components"
import './header.scss'

const LogoWrapper = styled.div`
  display: block;
  margin: 2px;
  padding: 0;
`

export const Header = () => {
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);

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
      <div className="header-content">
        <LogoWrapper>
          <h1>
            <Link to = {data.site.siteMetadata.prefix}>
              {data.site.siteMetadata.title}
              </Link>
          </h1>
        </LogoWrapper>
      <Bio/>
      </div>
    </header>
  )

}
