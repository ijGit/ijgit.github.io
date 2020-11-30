// src/pages/index.js

import { Link, graphql } from "gatsby"
import React from "react"

import { Layout } from "../components/layout/layout";


export default ({ data }) => {

  return(
    <Layout siteData={data.site}>
      
      {data.allMarkdownRemark.edges.map(post =>(
        <div className="post-item" key = {post.node.id}>

          <div className="post-item-title">
            <h3><Link to={post.node.fields.slug}> {post.node.frontmatter.title}</Link></h3>
          </div>
          <div className="post-item-meta">
            <span>{post.node.fields.date}</span>
            <span>{post.node.fields.category}</span>
            <span>{post.node.fields.tags}</span>
          </div>

          <div className="post-item-excerpt">
            {post.node.excerpt}
          </div>
        </div>
      ))}
    </Layout>
  )
} 


// show category page links
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        url
      }
      pathPrefix
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      
      filter: {frontmatter: {type: {eq: "category"}}}){
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

