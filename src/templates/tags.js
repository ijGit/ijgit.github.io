import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"


import styled from 'styled-components';

import { Layout } from "../components/layout/layout";

const BackButton = styled.div`
  margin-bottom: 5vh
`

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PostList = styled.ul`
  margin-left: 0;
  padding: 0;
`
const PostRep = styled.li`
  list-style: none;
  margin-bottom: 9vh;
`
const PostRepHeader = styled.h3`
  font-size: 1.2rem;  
  margin-bottom: 1vh;
`

const PostRepDate = styled.div`
  font-size: 0.85rem;  
  opacity: .7;
`
const PostRepExcerpt = styled.div`
  font-size: 0.9rem;
  opacity: .8;
  
  -webkit-line-clamp:2;
  line-height: 1.5rem;
  height: 3rem;
  
  word-wrap:break-word; 
  overflow: hidden;
  text-overflow: ellipsis;
`

// pageContext
const Tags = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <BackButton>
          <Link to="/">back</Link>
      </BackButton>
      <PostListContainer>
        
      <PostList>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <PostRep key={slug}>
              <div className='post-rep'>
              <PostRepHeader><Link to={slug}>{title}</Link></PostRepHeader>
              <PostRepDate className='post-rep-date'>{node.frontmatter.date}</PostRepDate>
              <PostRepExcerpt className='post-rep-excerpt'>{node.excerpt}</PostRepExcerpt>
              </div>
            </PostRep>
          )
        })}
      </PostList>
        </PostListContainer>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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