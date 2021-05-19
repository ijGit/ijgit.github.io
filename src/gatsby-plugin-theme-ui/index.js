

const theme = {

  fonts: {
    body:
      'Nanum Gothic, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Fira Code, Menlo, monospace',
  },
  fontSizes: [13, 14, 16, 18, 20, 24, 32, 48, 64, 96],
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

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [14, 15, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],


  style: {
    h1: {
      variant: `text.heading`,
      fontSize: [5, 6, 6, 7],
      mt: 4,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 5, 5, 6],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      borderCollapse: `separate`,
      borderSpacing: 0,
    },
  },
  thead: {
    width: `100%`
  },
  th: {
    verticalAlign: `bottom`,
    borderBottomWidth: `2px`,
    color: `heading`,
  },
  td: {
    verticalAlign: `top`,
    borderBottomWidth: `1px`,
  },
  hr: {
    mx: 0,
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
  },



  badges: {
    tag:{
      margin: `4px .2rem`,
      fontSize: `.9rm`,
      fontWeight: `300`,
      background: `#1976d2`,
      borderRadius: `4px`,
      opacity: `.6`,
      '&:hover':{
        opacity: '1'
      }
    }
  },

};

export default theme;