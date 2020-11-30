// src/template/category-page.js

import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout/layout';

/*
data come from graphQL query then can be
rendered in our template
*/

export const postItem = ({ post }) => {
  return (
    <div className="post-item" key={post.id}>
      <div className="post-item-title">
        <h3><Link to={post.fields.slug}> {post.frontmatter.title}</Link></h3>
      </div>
      <div className="post-item-meta">
        <span>{post.frontmatter.date}</span>
        <span>{post.frontmatter.category}</span>
        <span>{post.frontmatter.tags}</span>
      </div>
      <div className="post-item-excerpt">{post.excerpt}</div>
    </div>
  )
}



export default function Template({ data = [] }) {
  const { allMarkdownRemark: posts } = data;

  const metaData = {};
  metaData['title'] = posts.edges.node.frontmatter.title;
  metaData['description'] = posts.edges.node.frontmatter.description;
  metaData['keywords'] = posts.edges.node.frontmatter.keywords;
  metaData['category'] = posts.edges.node.frontmatter.category;

  const postData = {};
  postData['title'] = posts.edges.node.frontmatter.title;
  postData['category'] = posts.edges.node.frontmatter.category;

  return (
    <Layout metaData={metaData} postData={postData}>
      {posts.edges.map(post => (
        <postItem post={post} />
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
        language
      }
    }
    allMarkdownRemark(limit: 1000, sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {category: {eq: $eq }, type: {ne: "category"}}}) {
      edges{
        node{
          id
          frontmatter {
            category
            date(formatString: "YYYY-MM-DD")
            title
            description
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