/*

{
  allMarkdownRemark {
    edges {
      node {
        html
        tableOfContents(
          absolute: true
          pathToSlugField: "frontmatter.path"
          heading: "only show toc from this heading onwards"
          maxDepth: 2
        )
        frontmatter {
          # Assumes you're using path in your frontmatter.
          path
        }
      }
    }
  }
}

*/