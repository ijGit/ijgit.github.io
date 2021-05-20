

const theme = {

  fonts: {
    body:
      'Nanum Gothic, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Fira Code, Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  useCustomProperties: true,
  initialColorMode: "light",

  colors: {
    text: '#24292e',
    svg: '#24292e',
    background: '#fff',
    primary: '#24292e',
    // secondary: "",

    modes: {
      dark: {
        text: '#e4e4e4',
        svg: '#e4e4e4',
        primary: '#e4e4e4',
        blockquote: '#e4e4e4',
        background: '#262626',
      },
    },
  },


  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },





  badges: {
    tag: {
      margin: `4px .2rem`,
      padding: `2px 4px`,
      fontSize: `.9em`,
      fontWeight: `300`,
      background: `#1976d2`,
      borderRadius: `4px`,
      opacity: `.6`,
      '&:hover': {
        opacity: '1'
      }
    }
  },

};

export default theme;