import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"
//import { Link as GatsbyLink } from "gatsby";

import styled from "styled-components";


const Tag = styled(Link)`
  height: 3rem;
  padding: 1vw;
  display: inline-block;
`;


const TagContainer = styled.div`
  padding-top: 2vh;
  text-align: center;
`


export default function IndexPage({ data }) {
  const group = data.allMarkdownRemark.group;
  return (
    <Layout>
      <TagContainer>
          {group.map(item => {
            return (
              <Tag to={`/tags/${kebabCase(item.fieldValue)}/`}>
                {item.fieldValue} ({item.totalCount})
              </Tag>
            )
          })}
      </TagContainer>
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`