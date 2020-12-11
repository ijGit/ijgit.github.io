const config = require("./_config")
const path = require(`path`)


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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          // for TOC
          maxDepth: 3,
        },
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              loading: 'lazy',
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
                react: "jsx",
              },
            },
          },
          {
            resolve: 'gatsby-remark-katex',
            options: {
              // https://github.com/KaTeX/KaTeX/blob/master/docs/options.md 
              strict: 'ignore',
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
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
