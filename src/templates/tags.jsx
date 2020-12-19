import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import { Head } from "../components/head/head"
import { Layout } from "../components/layout/layout";
import {PostList} from '../components/post-list/post-list'


const BackButton = styled.div`
  margin-bottom: 5vh
`
const Tags = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <>
    <Head title={data.site.siteMetadata.title} />
    <Layout siteData={data.site}>
        <section id="content">
          <BackButton>
            <Link to="/">back</Link>
          </BackButton>
          
          <PostList posts={edges}/>
        </section>
    </Layout>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: {ne: false}} }
    ) {
      totalCount
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