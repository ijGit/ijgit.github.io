// src/template/post.js

import { graphql } from 'gatsby';
import React from 'react';

/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data}){
  const {markdownRemark:post} = data; 
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
  query postQuery($slug: String!) {
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