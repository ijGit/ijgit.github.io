// gatsby-node/create-pages.js

//const createPages = async ({ actions, graphql }) => {
  async function createPages ({ actions, graphql }) {
    const { data } = await graphql(`query {
      allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              category
              type
            }
          }
        }
      }
    }`);
  
    data.allMarkdownRemark.edges.forEach( ({node}) => {
      // console.log(node.fields);
  
      if(node.frontmatter.type == 'post' || node.frontmatter.type == null){
        actions.createPage({
          path: node.fields.slug,
          component: require.resolve(`../src/templates/post-page.js`),
          context: { slug: node.fields.slug },
        });
      }
      else if(node.frontmatter.type == 'category'){
        actions.createPage({
          path: node.fields.slug,
          component: require.resolve(`../src/templates/category-page.js`),
          context: { eq: node.frontmatter.category },
        });
      }
    });
  }
  
  module.exports = createPages;
  