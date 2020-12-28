const path = require(`path`)
const type = require('./config/type')
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

    if(node.frontmatter.draft === null || node.frontmatter.draft === undefined || node.frontmatter.draft === true){
      // make new title
      const _type = node.frontmatter.type!=='undefined' ? node.frontmatter.type: 'default';
      const _title = `${type[_type]} ${node.frontmatter.title}`;
      node.frontmatter.title = _title;

      // make node path       
      const file = getNode(node.parent);
      const slug = `/pages/${file.name}`;

      createNodeField({ node, name: 'slug', value: slug });
    }
  }
}




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // template files
  const postTemplate = path.resolve(`${__dirname}/src/templates/post.jsx`)
  // query
  const result = await graphql(`{
    postsRemark: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000, filter: {frontmatter: {draft: {ne: false}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            title
            type
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
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
}