/* error code */

const path = require('path');


async function createPages ({actions, graphql}) {
  const {createPage} = actions;
  const {postTemplate} = path.resolve('src/templates/post.js');

  const result = await graphql(`{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
      edges{
        node{
          fields {
            slug
          }
        }
      }
    }
  }`);

  if(result.errors){
    return Promise.reject(res.errors);
  }
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {slug: node.fields.slug},  // additional data can be passed via context
    })
  });
}

module.exports = createPages;
//export default createPostPages;
