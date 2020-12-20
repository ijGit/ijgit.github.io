import React, { useEffect, useState } from "react"
import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import {PostList} from '../components/post-list/index'
import styled from "styled-components";
import queryString from 'query-string';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    display: flex;
    align-self: stretch;
  }
  .tags{
    display: flex;
  }
  .date{
    display: flex;
  }
`



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
      pathPrefix
    }
    allMarkdownRemark(limit: 2000, 
      sort: { fields: [frontmatter___date], order: DESC } 
      filter: {frontmatter: {draft: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            tags
            title
          }
        }
      }
    }
  }
`
