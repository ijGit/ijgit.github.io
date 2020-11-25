// gatsby-node.js

const createFilePath = require (`gatsby-source-filesystem`);
//const onCreateNode = require ('./gatsby-node/on-create-node');
//const createPages = require('./gatsby-node/create-pages'); 

//onCreateNode.onCreateNode();
//createPages.createPages();


exports.createPages = require('./gatsby-node/create-pages'); 
exports.onCreateNode = require('./gatsby-node/on-create-node');




/*

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);
    var base = ``;

    // check category first for category based url
    const categories = node.frontmatter.categories;
    if (categories == null) {
      base = `/undefined`;
    }
    else {
      var arr = Array();
      for (i in categories) {
        base += `/${categories[i]}`
        arr[i] = base;
      }
    }
    createNodeField({ node, name: 'slug', value: `${base}/${file.name}` });
    createNodeField({ node, name: 'categorySlug', value: `${arr}` });
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
*/