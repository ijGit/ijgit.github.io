function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const file = getNode(node.parent);

    // make slug based category
    var base = '', categoryName = '', root = '';
    const categories = node.frontmatter.categories;

    if (categories == null) { // set 'undefined'
      base = 'undefined';
      categoryName = 'undefined';
      root = '/';
    }
    else {    // make category based url
      for (i in categories) base += `/${categories[i]}`;  
      categoryName = categories[categories.length-1]; // set last category name
      
      if(categories.length == 1)  root = '/';
      else root = categories[0]; // set first category name
    }

    // createNodeField 실행 시, createPages 실행 -> 한번 만 createPages를 실행하도록 함 
    var meta = {};
    meta['category'] = categoryName;
    meta['root'] = root;

    if(file.sourceInstanceName == 'markdown-post-page'){
      meta['slug'] =  `${base}/${file.name}`;
      meta['type'] = 'post';
    }
    else if(file.sourceInstanceName == 'markdown-category-page'){
      meta['slug'] =  `${base}`;
      meta['type'] = 'category';
    }
    createNodeField({ node, name: 'meta', value: meta });
  }
}
module.exports = onCreateNode;
