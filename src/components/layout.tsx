import React from 'react'


const Layout: React.FC = ({ children }) => (
  <div
    id="layout"
    style={{
      width: `100%`,
      marginTop: `4vh`,
      display: `flex`,
      flexDirection: `column`,
    }}
  >

    <header></header>

    <section
      id='contents'
      style={{
        maxWidth: `800px`,//`1023px`,
        width: `95%`,
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