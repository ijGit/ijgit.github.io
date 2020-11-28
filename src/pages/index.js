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

