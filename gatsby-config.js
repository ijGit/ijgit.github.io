const config = require('./_config');

const _config = {
  pathPrefix: config.prefix,
  siteMetadata: {
    url: config.siteUrl,
    title: config.title,
    description: config.description,
    language: config.language,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        path: `${__dirname}/contents/posts`,
        name: `markdown-post-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        path: `${__dirname}/contents/categories`,
        name: `markdown-category-page`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // tableOfContents 
        // tableOfContents: {  // for TOC 
        //   maxDepth: 3
        // },

        plugins: [
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
      },
    },


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
  ]
}

module.exports = _config;