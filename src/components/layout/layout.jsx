import React from "react"
// import { useMemo } from "react"

import { Header } from "./../header/header"
import {Head} from "./../head/head"

import "./../../styles/global.scss"
import "./layout.scss"


export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head/>
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
