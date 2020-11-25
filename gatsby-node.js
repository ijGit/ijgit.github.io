// gatsby-node.js

const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

    if(node.frontmatter.categories == null){
      const slug = createFilePath({ node, getNode, basePath: `posts`});
      createNodeField({node, name: `slug`, value: slug });
    }else{
      // get category 
      const categories = node.frontmatter.categories;
      var category_info = ``;
      for(i in categories){
        category_info += `${categories[i]}/`
      }
      console.log(category_info);
  
      // get filename
      const fileObj = getNode(node.parent);
      const filename = fileObj.base;
      console.log(filename);

      const slug = `${category_info}${filename}`;
      createNodeField({ node, name: 'slug', value: slug });
    }
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    })
  })
}