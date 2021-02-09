import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import image from './../../images/profile.png'
import {Icon} from './../../components/icon'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {ThemeToggle} from './../theme-toggle'

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

  .buttons{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

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
      <div className='buttons'>
        <Link to ='/search'>
          <Icon icon={faSearch}/>
        </Link>
        
        <ThemeToggle/>
      </div>
    </Container>
  )
}
