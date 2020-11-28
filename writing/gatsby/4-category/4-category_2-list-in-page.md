
# gatsby-node.js




```js
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

      console.log(node);

      actions.createPage({
        path: node.fields.slug,
        component: require.resolve(`../src/templates/category-page.js`),
        context: { name: node.frontmatter.categories },
      });
    }
  });
}

module.exports = createPages;

```


# template

```js
// src/template/category-page.js

import { graphql, Link } from 'gatsby';
import React from 'react';

/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data =[]}){
  const {allMarkdownRemark:posts} = data; 

  return (
    <div>
      <h1>category</h1>

      {posts.edges.map(post =>(
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

export const pageQuery = graphql`
  query categoryQuery($name: [String]) {
    allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {categories: {in: $name}}}){
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