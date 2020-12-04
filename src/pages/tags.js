import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import {Layout} from "./../components/layout/layout"

import styled from "styled-components";

const Tag = styled.li`
  display: inline-block;
  margin-right: 3vw;
`
export default function TagsPage({
  data: {
    allMarkdownRemark: { group },
    site: { siteMetadata: { title }, },
  },
}) {
  return (
    <Layout>
      <Helmet title={title} />
      <div>
        <ul>
          {group.map(item => {
            // function getFontSize(){
            //   return `calc(${item.totalCount/100}vh + 12px)`
            // }
            return(
            <Tag key={item.fieldValue}>
              <Link to={`/tags/${kebabCase(item.fieldValue)}/`}>
                {item.fieldValue} ({item.totalCount})
              </Link>
            </Tag>
            )
        })}
        </ul>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
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