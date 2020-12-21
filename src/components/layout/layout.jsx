import React, {useMemo } from "react"
// import React, { useEffect, useState, useMemo } from "react"
import { useColorMode } from "theme-ui"
import {Header} from './../header'
import {Bio} from './../bio'
import "./layout.scss"


export const Layout = ({ children }) => {
  // for header color
  const [colorMode] = useColorMode()
  const theme = useMemo(() => colorMode === "dark", [colorMode])

  return (
    <React.Fragment>
      <div id="layout" className={theme ? "dark" : "light"}>
        <Header id='header'/>

        <section id='contents'>
          <aside id='aside-left'><Bio/></aside>

          <main id='main'>{children}</main>

          <aside id='aside-right'/>

        </section>
        
        <footer />
      </div>
    </React.Fragment>
  )
}
