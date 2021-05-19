import * as React from "react"
import { TagList } from '../components/tag-list'
import PostList from './../components/post-list/post-list'
import Layout from './../components/layout'
import { graphql } from "gatsby"
import queryString from "query-string"
import './../styles/components/post-list/index.scss'



// markup

export default function IndexPage({ data }) {

  const { edges, group } = data.allMarkdownRemark;

  const query = typeof window !== 'undefined' && window ?
    queryString.parse(window.location.search) : 'undefined';

  const tag = query === 'undefined' || query.tag === null || query.tag === undefined ?
    'undefined' : query.tag.toLowerCase().split('-').join('');


  const posts = edges.filter(({ node }) => {
    const tags = node.frontmatter.tags.map(tag => {
      if (tag.includes(' ')) {
        tag = tag.split(' ').join('');
      }
      return tag;
    });
    if (tags.includes(tag)) {
      return node
    }
  });


  const tags = group.map(({ fieldValue }) => {
    return fieldValue;
  });


  return (
    <Layout>
      <div style={{
        marginBottom: `5vh`
      }}>
        <TagList tags={tags} />
      </div>
      <PostList posts={posts} />
    </Layout>
  )
}



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000, sort: {fields: frontmatter___date}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`