import React from "react"
// import { useMemo } from "react"

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

import { useColorMode } from "theme-ui"

import { Header } from "./../header/header"
import styled from "styled-components"


import "./../../styles/global.scss"
import "./layout.scss"

const Toggle = styled.button`
  top: 0;
  right: 0;
  background-color: transparent;
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


export const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  // const isDark = useMemo(() => colorMode === "dark", [colorMode])

  return (
    <React.Fragment>
      <div id="layout" className={colorMode}>
        <Header id="header" />
        <Toggle
          onClick={e => {setColorMode(colorMode === "default" ? "dark" : "default")}}>
          <Icon><Fa icon = {colorMode === "default" ? faMoon : faSun} /></Icon>
        </Toggle>
        <aside></aside>
        <main>
          <div id="content"> {children} </div>
        </main>
      </div>
    </React.Fragment>
  )
}
