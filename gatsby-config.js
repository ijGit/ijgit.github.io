module.exports = {
  siteMetadata: {
    title: "ij.log",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        classPrefix: 'language-',
        inlineCodeMarker: null,
        showLineNumbers: true,
        noInlineHighlight: false,
        escapeEntities: {},
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    },
    
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./posts/",
      },
      __key: "posts",
    },

    // setting typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
