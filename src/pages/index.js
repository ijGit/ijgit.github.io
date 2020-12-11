import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"

import styled from "styled-components";

const TagContainer = styled.ul`
  margin-top: 2vh;
`

const TagWrapper = styled.li`
  cursor: pointer;
  padding-left: 1vw;
  padding-right: 1vw;
  display: inline-block;
`

const Tag = styled(Link)`
  margin: 3px;
`


export default function IndexPage({ data }) {
  const group = data.allMarkdownRemark.group;
  return (
    <Layout>
      <TagContainer>
          {group.map(item => {
            return (
              <TagWrapper>
                <Tag to={`/tags/${kebabCase(item.fieldValue)}/`}>
                  {item.fieldValue} ({item.totalCount})
                </Tag>
              </TagWrapper>
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