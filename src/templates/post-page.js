// src/template/post.js
import React from 'react';

import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout'

import './../styles/code-style.scss'
import './../styles/post-style.scss'

export const Post = ({ post }) => {
  return (
    <article>
      <div className="blog-post-container">
        <div className="blog-post">
          <div className='post-meta'>
            <div className="post-title">
              <h1>{post.frontmatter.summary}</h1>
              <h2>{post.frontmatter.title}</h2>
            </div>
            <div>
              <span className="post-date">{post.frontmatter.date}</span>
              <span className="post-tag">{post.frontmatter.tags}</span>
            </div>
            <div>{post.frontmatter.category}</div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </article>
  )
}



/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const category = (post.frontmatter.category == null) ? 'undefined' : post.frontmatter.category;
  
  const metaData = {};
  metaData['title'] = post.frontmatter.title;
  metaData['description'] = post.frontmatter.description;
  metaData['keywords'] = post.frontmatter.keywords;
  metaData['category'] = post.frontmatter.category;

  const postData = {};
  postData['title'] = post.frontmatter.title;
  postData['category'] = category;

  return (
    <Layout metaData={metaData} postData={postData}>
        <Post post={data}/>
    </Layout>
  )
}

export const postQuery = graphql`
  query postQuery($slug: String!) {
    site {
      siteMetadata {
        title
        url
        language
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        tags
        keywords
      }
      fields {
        slug
      }
    }
  }
`