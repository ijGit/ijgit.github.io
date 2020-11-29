// gatsby-node/create-pages.js

//const createPages = async ({ actions, graphql }) => {
async function createPages ({ actions, graphql }) {
  const { data } = await graphql(` query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter{
            type
            categories
          }
        }
      }
    }
  }`);


  data.allMarkdownRemark.edges.forEach( ({node}) => {
    if(node.frontmatter.type == 'post'){
      actions.createPage({
        path: node.fields.slug,
        component: require.resolve(`../src/templates/post-page.js`),
        context: { slug: node.fields.slug },
      });
    }
    else if(node.frontmatter.type == 'category'){

      // console.log(node);

      actions.createPage({
        path: node.fields.slug,
        component: require.resolve(`../src/templates/category-page.js`),
        context: { name: node.frontmatter.categories },
      });
    }
  });
}

module.exports = createPages;
