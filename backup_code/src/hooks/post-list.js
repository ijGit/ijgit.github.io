import React from "react"
import { Link, graphql } from "gatsby"
//import { Helmet } from "react-helmet"

// {/* 클래스에 태그랑 카태고리 지정 -> 활성 비활성에 따라 보이고 안보이고 */}

export default async function postList({data}){
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}


export const pageQuery = graphql`
  query getPostList($filter: MarkdownRemarkFilterInput = {}, 
    $field: MarkdownRemarkFieldsEnum! = frontmatter___categories
  ){
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: $filter) {
      group(field: $field) {
        edges {
          node {
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
  }
`




const blogListItem = (props) =>{
  return (
    <div className="blog-list-item">
      <h2><Link>{props.title}</Link></h2>
      <div className="blog-meta">
        <div className="date">{props.date}</div>
        <div className="tags">{props.tags}</div>
        <div className="categories">{props.categories}</div>
      </div>
      <div className="excerpt"><Link>{props.excerpt}</Link></div>
    </div>
  )
}
