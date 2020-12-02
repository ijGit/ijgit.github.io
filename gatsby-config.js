const config = require('./_config');

module.exports = {

  siteMetadata: {
    url: config.url,
    title: config.title,
    description: config.description,
    language: config.language,
    author: config.author,
    name: config.author,
    prefix: config.prefix
  },


  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
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
  ],
}
