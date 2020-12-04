



# md file

/contents/categories/category1.md

```markdown
---
title: category1
date: 2020-11-25
type: category
categories: [category1]
---

# Category1

add category
```




## onCreateNode
// gatsby-node/on-create-node.js

```js

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

```


## onCreatePages


```js
// gatsby-node/create-pages.js
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
```





# post-template


```javascript
// src/template/post.js


import { graphql } from 'gatsby';
import React from 'react';

/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data}){
  const {markdownRemark: post} = data; 
  // const post = data.markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: post.html}}
        />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        tags
      }
      fields {
        slug
      }
    }
  }
`
```



# post-list


src/pages/index.js
```js
// src/pages/index.js

import { Link, graphql } from "gatsby"
import React from "react"

const IndexPage = ({data}) => {
  return(
    <div>
      <h1>Home</h1>

      <h2>Index</h2>
      
      {data.allMarkdownRemark.edges.map(post =>(
        <div className="post-item" key = {post.node.id}>

          <div className="post-item-title">
            <h3><Link to={post.node.fields.slug}> {post.node.frontmatter.title}</Link></h3>
          </div>
          <div className="post-item-meta">
            <span>{post.node.fields.date}</span>
            <span>{post.node.fields.categories}</span>
            <span>{post.node.fields.tags}</span>
          </div>

          <div className="post-item-excerpt">
            {post.node.excerpt}
          </div>
        </div>
      ))}
    </div>
  )
} 
export default IndexPage


export const pageQuery = graphql`
  query indexQuery{
    allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date, order: DESC}){
      edges{
        node{
          id
          frontmatter {
            categories
            date(formatString: "YYYY-MM-DD")
            tags
            title
          }
          excerpt(pruneLength: 100)
          fields {
            slug
          }
        }
      }
    }
  }
`


```