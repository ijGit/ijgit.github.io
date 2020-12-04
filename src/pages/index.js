import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"

import styled from "styled-components";

const Tag = styled.div`
  padding: 2px;
  margin: 5px;
  display: inline-block;
  margin-right: 3vw;
`

export default function IndexPage({ data }) {
  const group = data.allMarkdownRemark.group;
  return (
    <Layout>
      <div>
          {group.map(item => {
            return (
              <Tag key={item.fieldValue}>
                <Link to={`/tags/${kebabCase(item.fieldValue)}/`}>
                  {item.fieldValue} ({item.totalCount})
                </Link>
              </Tag>
            )
          })}
      </div>
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