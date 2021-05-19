import React from 'react'
import {Header} from './header'
import './../styles/global.scss'


const Layout: React.FC = ({ children }) => (
  <div
    id="layout"
    style={{
      width: `95%`,
      display: `flex`,
      flexDirection: `column`,
      marginTop: `2em`,
      margin: `0 auto`
    }}
  >

    <Header/>

    <section
      id='contents'
      style={{
        maxWidth: `800px`,//`1023px`,
        width: `100%`,
        margin: `0 auto`
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

export default Layout