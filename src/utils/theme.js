// src/gatsby-plugin-theme-ui/index.js


export default {
  initialColorModeName: 'light',

  colors: {
    text: '#24292ee0',
    background: '#fff',

    modes: {
      dark: {
        text: '#e4e4e4e8',
        background: '#212121',
      },
    },
  },
  fonts: {
    body: "Noto Sans KR, sans-serif",
    heading: "Noto Sans KR, sans-serif",
    monospace: "Source Code Pro, Consolas, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
}