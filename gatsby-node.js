const path = require(`path`)
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);
    const slug = `/pages/${file.name}`;

    createNodeField({ node, name: 'slug', value: slug });
  }
}




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // template files
  const postTemplate = path.resolve(`${__dirname}/src/templates/post.jsx`)
  const tagTemplate = path.resolve(`${__dirname}/src/templates/tags.jsx`)
  // query
  const result = await graphql(`{
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          fields {slug}
          frontmatter {
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {fieldValue}
    }
  }`
  )
  
  // Create post pages
  const posts = result.data.postsRemark.edges;
   posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {slug: node.fields.slug,},
    })
  })

  // Extract tag data from query and make tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {tag: tag.fieldValue,},
    })
  })
}