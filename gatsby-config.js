const config = require('./_config');

const _config = {
  pathPrefix: config.prefix,
  siteMetadata: {
    url: config.siteUrl,
    title: config.title,
    description: config.title,
    language: config.language
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: '/',
        display: `standalone`,
        theme_color_in_head: false,
        icon: 'static/favicon.ico'
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        classPrefix: 'language-',
        inlineCodeMarker: null,
        showLineNumbers: true,
        noInlineHighlight: false,
        escapeEntities: {},
        aliases: {
          react: 'jsx',
        },
      },
    },
    `gatsby-plugin-offline`,
  ]
}

module.exports = _config;