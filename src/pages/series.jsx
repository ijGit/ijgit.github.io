import React from "react"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import styled from "styled-components"
import Img from "gatsby-image"
import imageInfo from "./../../config/series-config"

const GalleryContainer = styled.div`
  .gallery {
    display: flex;

    .figure-item {
      margin: 8px;
      max-width: 300px;
      width: 300px;
      @media screen and (max-width: 479px) {
        width: 95%;
      }
      .figure {
        width: 100%;
  
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }

      .figure-caption {
        display: inline-block;
        padding-left: 8px;

        padding: 8px;
        width: 100%;

        background-color: #43494f86;
        border-radius: 0 0 10px 10px;

        font-size: calc(13px + 0.3vh);
        font-weight: 500;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`

export default function IndexPage({ data }) {
  const { group } = data.allMarkdownRemark
  const { edges } = data.allFile // images

  var main_images = {}
  edges.forEach(({ node }) => {
    main_images[node.name] = node.childImageSharp.fixed
  })

  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>
        <GalleryContainer>
          <div className="gallery">
            {group.map(item => {
              return (
                <div key={item.fieldValue} className="figure-item">
                  <Link to={`/series/${item.fieldValue}`}>
                    <Img
                      className='figure'
                      fixed={main_images[imageInfo[item.fieldValue]]}
                    />
                    <div className="figure-caption">{item.fieldValue}</div>
                  </Link>
                </div>
              )
            })}
          </div>
        </GalleryContainer>
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
      sort: { fields: frontmatter___date }
      filter: { frontmatter: { draft: { ne: false } } }
    ) {
      group(field: frontmatter___series) {
        fieldValue
        totalCount
        nodes {
          fields {
            slug
          }
        }
      }
    }

    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "main-images" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(height: 200, width: 300) {
              src
              ...GatsbyImageSharpFixed
            }
          }
          name
        }
      }
    }
  }
`
