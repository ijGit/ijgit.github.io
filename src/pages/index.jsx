import React from "react"

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"

import styled from "styled-components"

export const Tags = ({ tags }) => {
  return(
    <>
      {tags.map(tag => {
        //console.log(tag);
        return (<span key={tag}>{tag}</span>)
      })}
    </>
  )
}

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
  opacity: 0.7;
`
const PostRepTags = styled.div`
  font-size: 0.85rem;
  opacity: 0.7;
`

const PostRepExcerpt = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;

  -webkit-line-clamp: 2;
  line-height: 1.5rem;
  height: 3rem;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout siteData={data.site}>
      <main>
        <section id="content">
          <PostListContainer>
            <PostList>
              {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <PostRep key={slug}>
                    <div className="post-rep">
                      
                      <PostRepHeader>
                        <Link to={slug}>{title}</Link>
                      </PostRepHeader>
                      
                      <PostRepDate className="post-rep-date">
                        {node.frontmatter.date}
                      </PostRepDate>

                      <PostRepTags>
                        <Tags tags={node.frontmatter.tags} />
                      </PostRepTags>

                      <PostRepExcerpt className="post-rep-excerpt">
                        {node.excerpt}
                      </PostRepExcerpt>
                    </div>
                  </PostRep>
                )
              })}
            </PostList>
          </PostListContainer>
        </section>
      </main>
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
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
