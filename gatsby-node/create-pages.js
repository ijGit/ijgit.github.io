//const createPages = async ({ actions, graphql }) => {
async function createPages ({ actions, graphql }) {
  const { data } = await graphql(` query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }`)

  data.allMarkdownRemark.edges.forEach( ({node}) => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve(`../src/templates/post.js`),
      context: { slug: node.fields.slug },
    });
  });
}

module.exports = createPages;
