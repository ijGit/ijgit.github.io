import React from "react"

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useColorMode } from "theme-ui"



const Toggle = styled.button`
  margin-right: 2vw;
  margin-left: auto;
  margin-top: 1vh
  background-color: transparent;
  background: transparent;
  color: inherit;
  border: none;
  outline:none;
`

const Icon = styled.div`
  height: 0.9rem;
  margin-top: 1px;
  opacity: 0.6;
  color: inherit;
  font-size: 1.3rem;

  :hover{
    opacity: 0.9;
  }
`


export const ThemeToggle = () =>{
  const [colorMode, setColorMode] = useColorMode()

  return(
    <Toggle
      onClick={e => {setColorMode(colorMode === "default" ? "dark" : "default")}}>
      <Icon><Fa icon = {colorMode === "default" ? faMoon : faSun} /></Icon>
    </Toggle>
  )
}