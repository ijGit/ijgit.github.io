import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoWrapper = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 3vw;
  margin-bottom: 1.2vw;
`

export default function Header() {
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
    <header>
    <LogoWrapper>
      <h1>
        <Link to = {data.site.siteMetadata.prefix}>
          {data.site.siteMetadata.title}
          </Link>
      </h1>
    </LogoWrapper>
    </header>
  )
}