import React from 'react'
import { graphql } from "gatsby"



export default function PostTemplate({ data }) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  return (
    <>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>{frontmatter.date}</div>
        <div>{frontmatter.tags}</div>

        <div> {excerpt}  </div>
        <div> {html}  </div>

      </article>

    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        keywords
      }
      fields{
        slug
      }
    }
  }
`