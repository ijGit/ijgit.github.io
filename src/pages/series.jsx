import React from "react"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import styled from "styled-components"

const GalleryContainer = styled.div`
  .gallery {
    display: flex;


    .figure-item{
      margin: 8px;
      max-width: 300px;
      width: 300px;

      @media screen and (max-width: 479px){
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 2vh;

  .tag-container {
    width: 100%;

    .tag-item {
      margin: 4px;
    }

    margin-bottom: 5vh;
  }

  .search-input {
    margin-left: auto;

    width: 60%;
    max-width: 400px;

    display: flex;
    justify-content: space-between;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #8383837e;

    opacity: 0.6;
    font-size: 0.9em;
    padding: 5px;

    #search {
      display: inline-flex;
      max-width: 90%;
      border: none;
      outline: none;
      background: none;
      color: inherit;
    }
    .search-icon {
      display: inline-flex;
    }
  }
`

export default function IndexPage({ data }) {
  const { group } = data.allMarkdownRemark

  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>
        <GalleryContainer>
          <div className="gallery">
            {group.map(item => {
              return (
                <Link
                  to={`/series/${item.fieldValue}`}
                  className="figure-item"
                  key={item.fieldValue}
                >
                  <img
                    className="figure"
                    src="https://miro.medium.com/max/453/1*51D0MqtqHu3h2vTE5oJ-7g.png"

                  />
                  <div className="figure-caption">{item.fieldValue}</div>
                </Link>
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
  }
`
