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
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          // for TOC
          maxDepth: 3,
        },
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-emoji', // <-- this adds emoji
            options: {
              // default emojiConversion --> shortnameToUnicode
              emojiConversion: 'shortnameToUnicode',
              // when true, matches ASCII characters (in unicodeToImage and shortnameToImage)
              // e.g. ;) --> 😉
              ascii: false,
            }
          },
          `gatsby-remark-color-highlight`,
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 690,
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
/*
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
*/
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        changefreq: `daily`,
        priority: 0.7,
      },
    },

    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        //     // 1 query for each data type
        query: `
         {
          allMarkdownRemark (filter: {frontmatter: {draft: {ne: false}}}){
            edges {
              node {
                excerpt
                frontmatter {
                  date
                  tags
                  keywords
                  title
                }
                id
                fields {
                  slug
                }
              }
            }
          }
        }`,
        mapping: {
          allMarkdownRemark: {
            sitemap: `pages`,
          },
        },
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: {draft: {ne: false}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `${config.title}|Feed`,
          },
        ],
      },
    },
  ],
}
