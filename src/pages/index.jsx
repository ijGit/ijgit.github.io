import React from "react"

import { Layout } from "../components/layout/layout"
import { graphql } from "gatsby"
import {Head} from './../components/head/head'
import {PostList} from '../components/post-list/post-list'


export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  const {title} = data.site.siteMetadata;
  return (
    <>
    <Head title={title}/>
    <Layout siteData={data.site}>
        <section id="content">
        <PostList posts={edges}/>
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
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: false}}}
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
