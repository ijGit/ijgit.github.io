import React from "react"

import { Layout } from "../components/layout/layout"
import { graphql } from "gatsby"
import {Head} from './../components/head/head'
import {PostRep} from './../components/post-rep/post-rep'
import styled from "styled-components"


const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PostList = styled.ul`
  margin-left: 0;
  padding: 0;
`
const PostItem = styled.li`
  list-style: none;
  margin-bottom: 9vh;
`

export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  const {title} = data.site.siteMetadata;
  return (
    <>
    <Head title={title}/>
    <Layout siteData={data.site}>
        <section id="content">
          <PostListContainer>
            <PostList>
              {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <PostItem key={slug}>
                    <div className="post-rep">
                    <PostRep
                      title = {title}
                      tags = {node.frontmatter.tags}
                      date = {node.frontmatter.date}
                      excerpt = {node.excerpt}
                      slug = {slug}
                    />
                    </div>
                  </PostItem>
                )
              })}
            </PostList>
          </PostListContainer>
        </section>
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
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(format: PLAIN)
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
