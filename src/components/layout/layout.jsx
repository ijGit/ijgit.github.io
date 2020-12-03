import React from "react"
import { Bio } from "./../bio/bio";
import { Header } from "./../header/header"
import "./../../styles/global.scss"
import './layout.scss'

export const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div id="layout">
        <Header />
        <Bio/>
        <main>
          <div id="content"> {children} </div>
        </main>
      </div>
    </React.Fragment>
  )
}
