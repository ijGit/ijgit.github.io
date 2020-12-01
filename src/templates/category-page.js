// src/template/category-page.js

import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout/layout';

/*
data come from graphQL query then can be
rendered in our template
*/

// export function PostItem ({ props }) {
//   return(
    
//         <div className="post-item" key={props.id}>
//           <div className="post-item-title">
//             <h3><Link to={props.slug}> {props.title}</Link></h3>
//           </div>
//           <div className="post-item-meta">
//             <span>{props.date}</span>
//             <span>{props.category}</span>
//             <span>{props.tags}</span>
//           </div>
//           <div className="post-item-excerpt">{props.excerpt}</div>
//         </div>
// )}




export default function Template({ data = [] }) {

  const { allMarkdownRemark: posts } = data;
  const title = data.site.siteMetadata.title;
  var category = data.markdownRemark.frontmatter.category;
  category = category == null ? 'undefined' : category;

  return (
    <Layout root={data.site.siteMetadata.title} title={title} category={category}>
      {posts.edges.map(post => (

        <div className="post-item" key={post.node.id}>
          <div className="post-item-title">
            <h3><Link to={post.node.fields.slug}> {post.node.frontmatter.title}</Link></h3>
          </div>
          <div className="post-item-meta">
            <span>{post.node.frontmatter.date}</span>
            <span>{post.node.frontmatter.category}</span>
            <span>{post.node.frontmatter.tags}</span>
          </div>
          <div className="post-item-excerpt">{post.node.excerpt}</div>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query categoryQuery($eq: String, $slug: String) {
    site {
      siteMetadata {
        title
        url
        language
      }
    }
    allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {category: {eq: $eq }, type: {ne: "category"}}}) {
      edges{
        node{
          id
          frontmatter {
            category
            date(formatString: "YYYY-MM-DD")
            title
            description
          }
          excerpt(pruneLength: 100)
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        category
        description
      }
    }
  }
`