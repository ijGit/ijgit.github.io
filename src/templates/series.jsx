import React from "react"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import { Layout } from "../components/layout/layout"
import styled from "styled-components"

// list container
const Container = styled.div`
  .link{
    margin: 2rem 0 1.5rem 0;
    font-size: calc(13px + .5vh);
    font-weight: 500;
    display: inline-block;
    border-bottom: 2px solid;
  }


  .list-header {
    display: flex;
    felx-direction: row;
    align-items: flex-end;
    margin: 1rem 0;

    .list-header-title {
      margin: 0px;
    }
    .list-header-num {
      margin: 0.1rem 0.5rem;
      font-size: .7rem;
    }

    padding-bottom: 1.5rem;
    border-bottom: 1px solid #8383837e;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 479px){
      flex-direction: column;
      justify-content: start;
    }


    .list-item-title {
      font-size: 1rem;
      margin-right: auto;
    }

    .list-item-date {
      opacity: 0.8;
      @media screen and (max-width: 479px){
        margin-right: auto;
      }
    }
  }
`

const SeriesTemplate = ({ pageContext, data }) => {
  const { series } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <>
      <Head title={series} description={series} />
      <Layout siteData={data.site}>
        <Container>


          <div className='link'>
            <Link to={'/series'}>Series</Link>
          </div>

          <div className="list-header">
            <h1 className="list-header-title">{series}</h1>
            <span className="list-header-num">{`( ${totalCount} )`}</span>
          </div>

          <ol>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title, date } = node.frontmatter
              return (
                <li key={slug}>
                    <div className="list-item">
                    <h2 className="list-item-title">
                      <Link to={slug}>{title}</Link>
                    </h2>
                    <div className="list-item-date">{date}</div>
                </div>
                  </li>
              )
            })}
          </ol>
        </Container>
      </Layout>
    </>
  )
}

export default SeriesTemplate

export const pageQuery = graphql`
  query($series: String) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: {ne: false}, series: { in: [$series] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
