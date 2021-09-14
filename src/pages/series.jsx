import React from "react"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import styled from "styled-components"

const SeriesList = styled.div`
  .series-list {
    display: flex;
    justify-content: space-between;
    
    flex-wrap: wrap;
    flex-flow: row wrap;

    .series-item {
      margin: 2px 0px;
      max-width: 300px;
      width: 300px;
      @media screen and (max-width: 479px) {
        width: 95%;
      }

      .series-text {
        display: inline-block;
        width: 100%;
        font-size: calc(15px + 0.4vh);
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
  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>

        <h1 style={{width:`100%`, borderBottom: `1px solid #8383837e`}}>
          Series
        </h1>

        <SeriesList>
          <div className="series-list">
            {group.map(item => {
              return (
                <div key={item.fieldValue} className="series-item">
                  <Link to={`/series/${item.fieldValue}`}>
                    <div className="series-text">{item.fieldValue}</div>
                  </Link>
                </div>
              )
            })}
          </div>
        </SeriesList>
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
    )
    { 
      group(field: frontmatter___series)
      {
        fieldValue
        totalCount
        nodes {
          fields {  slug  }
        }
      }
    }
  }
`
