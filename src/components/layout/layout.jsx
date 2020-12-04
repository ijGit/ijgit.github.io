import React from "react"
// import { useMemo } from "react"

import { Header } from "./../header/header"

import "./../../styles/global.scss"
import "./layout.scss"


export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div id="layout">
        <Header id="header" />

        <aside></aside>
        <main>
          <div id="content"> {children} </div>
        </main>
      </div>
    </React.Fragment>
  )
}
