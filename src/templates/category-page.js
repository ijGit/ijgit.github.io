// src/template/category-page.js

import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout/layout';
/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data =[]}){
  const {allMarkdownRemark:posts} = data; 
  const {site} = data;

  return (
      <Layout siteData={site}>

      <h1>category</h1>

      {posts.edges.map(post =>(
        <div className="post-item" key = {post.node.id}>
          <div className="post-item-title">
            <h3><Link to={post.node.fields.slug}> {post.node.frontmatter.title}</Link></h3>
          </div>
          <div className="post-item-meta">
            <span>{post.node.frontmatter.date}</span>
            <span>{post.node.frontmatter.category}</span>
            <span>{post.node.frontmatter.tags}</span>
          </div>

          <div className="post-item-excerpt">
            {post.node.excerpt}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query categoryQuery($eq: String) {
    site {
      siteMetadata {
        title
        url
      }
      pathPrefix
    }
    allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {category: {eq: $eq }, type: {ne: "category"}}}) {
      edges{
        node{
          id
          frontmatter {
            category
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