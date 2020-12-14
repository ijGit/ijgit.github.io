import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"

import styled from "styled-components";

const TagContainer = styled.ul`
  margin-left: 0;
  text-align: center;
  margin-top: 2vh;
`

const TagWrapper = styled.li`
  cursor: pointer;
  padding-left: 1vw;
  padding-right: 1vw;
  display: inline-block;
  .tag{
    a, a:visited{opacity: 0.6;}
    a:hover{opacity: .9;}
  }
`
  
const Tag = styled(Link)`
  margin: 3px;
`


export default function IndexPage({ data }) {
  const group = data.allMarkdownRemark.group;
  return (
    <>
    <Head title={data.site.siteMetadata.title} />
    <Layout siteData = {data.site}>
      <section id="content">
      <TagContainer>
          {group.map(item => {
            return (
              <TagWrapper>
                <span className='tag'>
                <Tag to={`/tags/${kebabCase(item.fieldValue)}/`}>
                    {item.fieldValue}
                </Tag>
                </span>
              </TagWrapper>
            )
          })}
      </TagContainer>
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`