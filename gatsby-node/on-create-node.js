function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);

    var base = '', slug = '';
    base = (node.frontmatter.category == null)? 
      'undefined' : node.frontmatter.category;
    
    if(node.frontmatter.type == null || node.frontmatter.type == 'post'){
      slug = `/${base}/${file.name}`;
    }
    else if(node.frontmatter.type == 'category'){
      slug = `/${base}`;
    }

    createNodeField({ node, name: 'slug', value: slug });
  }
}
module.exports = onCreateNode;
