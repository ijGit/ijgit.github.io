const config = require('./_config');

const siteConfig = require('./_config');

const { title, description, author, siteUrl, language } = config;

const _config = {
  pathPrefix: siteConfig.prefix,
  siteMetadata: { 
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.title,
    language: siteConfig.language
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
        name: siteConfig.title,
        short_name: siteConfig.title,
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
    `gatsby-plugin-offline`,
  ]
}

module.exports = _config;