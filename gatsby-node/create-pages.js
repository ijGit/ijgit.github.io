// gatsby-node/create-pages.js

//const createPages = async ({ actions, graphql }) => {
async function createPages ({ actions, graphql }) {
  const { data } = await graphql(`query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC})
    {
      edges {
        node {
          fields {
            meta{
              slug
              type
              category
              root
            }
          }
          frontmatter{
            categories
          }
        }
      }
    }
  }`);

  data.allMarkdownRemark.edges.forEach( ({node}) => {
    const meta = node.fields.meta; 

    if(meta.type == 'post'){
      actions.createPage({
        path: meta.slug,
        component: require.resolve(`../src/templates/post-page.js`),
        context: { slug: meta.slug },
      });
    }
    else if(meta.type == 'category'){
      actions.createPage({
        path: meta.slug,
        component: require.resolve(`../src/templates/category-page.js`),
        context: { name: node.frontmatter.categories },
      });
    }
  });
}

module.exports = createPages;
