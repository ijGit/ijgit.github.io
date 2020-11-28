/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/gitpage-dev",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-sass`, // for css styling
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
}
