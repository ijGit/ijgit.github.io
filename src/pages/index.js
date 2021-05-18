import * as React from "react"
import PostList from './../components/post-list/post-list'
import Layout from './../components/layout'
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import queryString from "query-string"
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 2vh;

  .tag-container {
    width: 100%;
    
    .tag-item{
      margin: 4px;
    }

    margin-bottom: 5vh;
  }
`



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
  })

  return (
    <>
      <Layout>
        <div>
          <Container>
            <div className="tag-container">
              {group.map(item => {
                return (
                  <div className="tag-item" key={item.fieldValue}>
                    <Link to={`/?tag=${kebabCase(item.fieldValue)}`}>
                      {item.fieldValue}
                    </Link>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
        <PostList posts={posts} />
      </Layout>
    </>
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