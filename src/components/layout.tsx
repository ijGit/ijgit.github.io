import React, { useMemo } from 'react'
import { Header } from './header'
import { useColorMode } from "theme-ui"
import './../styles/global.scss'

const Layout: React.FC = ({ children }) => {

  const [colorMode] = useColorMode()
  const theme = useMemo(() => colorMode === "dark", [colorMode])

  return (
    <div
      id="layout" className={theme ? "dark" : "light"}
      style={{
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
        width: `95%`,
        margin: `0 auto`
      }}
    >
      <Header />
      <section
        id='contents'
        style={{
          maxWidth: `800px`,//`1023px`,
          width: `100%`,
          flex: `1`,
          overflow: `auto`,
          margin: `0 auto`,
          
        }}
      >
        {children}
        {/* <main
        style={{
          maxWidth: `800px`,
          width: `95%`,
          margin: `0 auto`
        }}
        >
      </main> */}
      </section>
    </div>
  )
}

export default Layout