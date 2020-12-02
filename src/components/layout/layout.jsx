import React from "react"

import { Header } from "./../header/header"
import "./../../styles/global.scss"
import './layout.scss'

export const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div id="layout">
        <Header />
        <main>
          <div id="content"> {children} </div>
        </main>
      </div>
    </React.Fragment>
  )
}
