import React from "react"
import {useMemo} from 'react'


import { useColorMode } from 'theme-ui';


import { Header } from "./../header/header"
import "./../../styles/global.scss"
import './layout.scss'



export const Layout = ({children}) => {
  const [colorMode] = useColorMode();
  const isDark = useMemo(() => colorMode === 'dark', [colorMode]);




  return (
    <React.Fragment>
      <div id="layout">
        <Header id='header'/>
        <aside>
        </aside>
        <main>
          <div id="content"> {children} </div>
        </main>
      </div>
    </React.Fragment>
  )
}