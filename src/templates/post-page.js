// src/template/post.js
import React from 'react';

import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout'

import './../styles/code-style.scss'
import './../styles/article-style.scss'
//require("prismjs/themes/prism-solarizedlight.css");

/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({data}){
  const {markdownRemark:post} = data; 
  const {site} = data;
  // const post = data.markdownRemark;

  return (
    <Layout siteData={site}>
      <article>

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
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
  query postQuery($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
      pathPrefix
    }
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