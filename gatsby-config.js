const config = require("./_config")

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: config.url,
    url: config.url,
    title: config.title,
    description: config.description,
    language: config.language,
    author: config.author,
    prefix: config.prefix,
    name: config.author,
  },

  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-theme-ui",
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
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          // for TOC
          maxDepth: 3,
        },

        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              escapeEntities: {},
              aliases: {
                react: "jsx",
              },
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        changefreq: `daily`,
        priority: 0.7,
      },
    },
  ],
}
