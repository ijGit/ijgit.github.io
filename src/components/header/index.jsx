import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import image from './../../images/profile.png'

import {ThemeToggle} from './../theme-toggle'



import { faSun, faMoon} from "@fortawesome/free-solid-svg-icons"
import { useColorMode } from "theme-ui"
import {Icon} from './../icon'


const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  
  .header-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    img {
      display: inline-flex;
      float: left;
      border: 1px solid #8383837e;
      border-radius: 50%;
      padding: 3px;
      height: 50px;
      width: 50px;
      margin: 0;
      opacity: .8;
    }
  
    h1{
      display:inline-flex;
      margin: 0;
      margin-left: 10px;
      a:hover{
        border-bottom: none;
      }
    }
  }
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
    <Container>
      <div className='header-title'>
        <img src={image} alt='profile'/>
        <h1>
          <Link to = {data.site.siteMetadata.prefix}>
            {data.site.siteMetadata.title}
            </Link>
        </h1>
      </div>
      <ThemeToggle/>
    </Container>
  )
}
