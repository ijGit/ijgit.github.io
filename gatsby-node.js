const path = require(`path`)
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if(node.frontmatter.draft === null || node.frontmatter.draft === undefined || node.frontmatter.draft === true){

      const file = getNode(node.parent);
      const slug = `/pages/${file.name}`;

      // add 'undefined tags"
      var tags = node.frontmatter.tags;
      if(tags === null || tags === undefined){      
        node.frontmatter['tags'] = ['undefined']
      }
      createNodeField({ node, name: 'slug', value: slug });
    }
  }
}




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // template files
  const postTemplate = path.resolve(`${__dirname}/src/templates/post.jsx`);
  const seriesTemplate = path.resolve(`${__dirname}/src/templates/series.jsx`);
  // query
  const result = await graphql(`{
    postsRemark: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000, filter: {frontmatter: {draft: {ne: false}}}) {
      edges {
        node {  fields {  slug  } }
      }
    }
    seriesGroup: allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: false}}}) {
      group(field: frontmatter___series) {
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

  // create series pages
  const serieses = result.data.seriesGroup.group;
  serieses.forEach( series => {
      createPage({
        path: `/series/${series.fieldValue}/`,
        component: seriesTemplate,
        context: {series: series.fieldValue},
      })
    }
  )
}