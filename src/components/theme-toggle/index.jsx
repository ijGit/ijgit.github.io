import React from "react"

import {Link} from 'gatsby'
import { faSun, faMoon, faTags, faSearch, faTimes} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useColorMode } from "theme-ui"
import {Icon} from './../icon'

const ButtonWrapper = styled.div`
  display: inline-block;
  height:1rem;
  width: 2rem;
  max-width: 2rem;
  text-align: center;
  a:hover{border-bottom: none;}

  .icon-item{
    font-size: 1rem;
    opacity: 0.6;
  }
  .icon-item:hover{
    opacity: 1;
  }
`

export const ThemeToggle = () =>{
  const [colorMode, setColorMode] = useColorMode()
  return(
    <ButtonWrapper
      onClick={e => {setColorMode(colorMode === "default" ? "dark" : "default")}}>
        <Icon icon={colorMode === "default" ? faMoon : faSun}></Icon>
    </ButtonWrapper>
  )
}
