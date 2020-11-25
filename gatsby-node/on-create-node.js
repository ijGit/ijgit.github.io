function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);
    var base = ``;

    // check category first for category based url
    const categories = node.frontmatter.categories;
    if (categories == null) {
      base = `/undefined`;
    }
    else {
//      var arr = Array();
      for (i in categories) {
        base += `/${categories[i]}`;
//        arr[i] = categories[i];
      }
    }
    createNodeField({ node, name: 'slug', value: `${base}/${file.name}` });
//    createNodeField({ node, name: 'categories', value: `${arr}` });
  }
}
module.exports = onCreateNode;
