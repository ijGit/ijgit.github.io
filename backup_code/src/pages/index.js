import React from "react"
import { Link, graphql } from "gatsby"
import ReactDOM from 'react-dom';
//import { Helmet } from "react-helmet"
//import {postList} from "../hooks/post-list"

/*
export default function Home({data= []}) {
  const {edges: posts} = data.allMarkdownRemark.group
  return (
    <div>
      {posts.map(({node: post}) => {
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

export const query = graphql`
  query ($filter: MarkdownRemarkFilterInput = {}, 
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
*/

export default async function Home(){
  return (
      <main><contents id="contents"/>
      <script>

      ReactDOM.render(<postList/>, document.getElementById('contents')); 
      </script>
      </main>
  )
}


export class postList extends React.Component{
  static defaultProps = {items: []}

  render(){
    const {data} = graphql(`
    query ($filter: MarkdownRemarkFilterInput = {}, 
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
  `)
  const {edges: posts} = data.allMarkdownRemark.group;

    return(
      <ul>
      {posts.map(({node: post}) => (
          <li className="blog-post-preview" key={post.id}>
          <h1>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h1>
          <h2>{post.frontmatter.date}</h2>
          <p>{post.excerpt}</p>
          </li>
      ))}
      </ul>
    )
  }
}













/*
export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {categories: {in: "category1"}}}) {
    group(field: frontmatter___categories) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          categories
          date
          tags
          title
        }
      }
    }
  }
}
`
*/