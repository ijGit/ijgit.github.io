function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  //console.log(node);
  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);
    var base = ``;

    // check category first for category based url
    const categories = node.frontmatter.categories;
    if (categories == null) {
      base = `/undefined`;
    }
    else {
      for (i in categories) {
        base += `/${categories[i]}`;
      }
    }

    if(node.frontmatter.type == 'post')
      createNodeField({ node, name: 'slug', value: `${base}/${file.name}` });
    else if(node.frontmatter.type == 'category'){
      createNodeField({ node, name: 'slug', value: `${base}`});
    }
  }
}
module.exports = onCreateNode;
