import React from "react"

import {Link} from 'gatsby'
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faFolder, faTags, faSearch, faTimes} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useColorMode } from "theme-ui"

const ButtonWrapper = styled.div`
  display: inline-block;
  height:1rem;
  width: 2rem;
  max-width: 2rem;
  text-align: center;
  a:hover{border-bottom: none;}
`

const Icon = styled.div`
  display: inline-block;
  height: 0.9rem;
  opacity: 0.6;
  color: inherit;
  font-size: 1rem;
  :hover{
    opacity: 0.9;
  }
`

const ThemeToggle = () =>{
  const [colorMode, setColorMode] = useColorMode()
  return(
    <ButtonWrapper
      onClick={e => {setColorMode(colorMode === "default" ? "dark" : "default")}}>
      <Icon><Fa icon = {colorMode === "default" ? faMoon : faSun} /></Icon>
    </ButtonWrapper>
  )
}

const LinkButton = props => {
  const to = typeof window !== 'undefined' && window.location.pathname === props.path ? '/' : props.path;
  const icon = typeof window !== 'undefined' && window.location.pathname === props.path ? faTimes : props.icon;

  return(
    <ButtonWrapper>
    <Link to={to} className='icon-link'>
      <Icon><Fa icon={icon}/></Icon>
    </Link>
    </ButtonWrapper>
  )
}

export const Navbar = () => {
  return(
    <nav>
      <ThemeToggle/>
      <LinkButton key='tags' path='/tags' icon={faTags}/>
      <LinkButton key='categories' path='/categories' icon={faFolder}/>
      <LinkButton key='search' path='/search' icon={faSearch}/>
    </nav>
  )
}