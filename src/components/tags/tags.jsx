import React, { useCallback, useRef } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"
import {Item} from "./item/item"

// Components
import { Helmet } from "react-helmet"

export const Tags = () =>{
  const data = useStaticQuery(graphql`
  query TagsQuery {
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
`)
  const { site, allMarkdownRemark } = data;
  const {group} = allMarkdownRemark;

  return(
    <div>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`tags/${kebabCase(tag.fieldValue)}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


Tags.propTypes = {
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
