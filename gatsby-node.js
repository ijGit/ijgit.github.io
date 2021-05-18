const path = require(`path`)
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

      const file = getNode(node.parent);
      const slug = `/pages/${file.name}`;

      // add 'undefined tags/keywords"
      var tags = node.frontmatter.tags;
      var keywords = node.frontmatter.keywords;
      
      if(tags === null || tags === undefined){      
        node.frontmatter['tags'] = ['undefined']
      }
      if(keywords === null || keywords === undefined){      
        node.frontmatter['keywords'] = ['undefined']
      }

      createNodeField({ node, name: 'slug', value: slug });
    }
}




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // template files
  const postTemplate = path.resolve(`${__dirname}/src/templates/post.tsx`);
  
  // query
  const result = await graphql(`{
    postsRemark: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000) {
      edges { node {  fields {  slug  } } }
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