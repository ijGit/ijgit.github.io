import { graphql } from 'gatsby';
import React from 'react';
// import Helmet from 'react-helmet';

/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data}){
  // const {markdownRemark: post} = data;  
  const post = data.markdownRemark;

  return(
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </div>
  )
}

export const postQuery = graphql`
  query blogPostByCategory($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        slug
      }
    }
  }
`