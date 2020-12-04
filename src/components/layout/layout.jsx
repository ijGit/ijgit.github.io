/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from "react"
import {useMemo} from 'react'


import { useColorMode } from 'theme-ui';


import { Header } from "./../header/header"
import "./../../styles/global.scss"
import './layout.scss'



export const Layout = ({children}) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = useMemo(() => colorMode === 'dark', [colorMode]);




  return (
    <React.Fragment>
      <div id="layout" className={colorMode}>
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
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