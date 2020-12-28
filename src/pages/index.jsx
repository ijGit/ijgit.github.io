import React from 'react' 
import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import { PostList } from "../components/post-list"
import styled from "styled-components"
import queryString from "query-string"


const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 2vh;

  .tag-container {
    width: 100%;
    
    .tag-item{
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
  const {edges, group} = data.allMarkdownRemark;

  const query = typeof window !== 'undefined' && window ? 
    queryString.parse(window.location.search) : 'undefined';


  const tag = query === 'undefined' || query.tag === null || query.tag === undefined ? '📌' : query.tag.toLowerCase();
  
  const posts = edges.filter(({node}) => {
      const tags = node.frontmatter.tags.map(tag =>{
        tag = tag.split(/[\_\ \. \/]/).join('-').split(/[\_\ \. \/ \+]/).join('');
        return tag.toLowerCase();
      });
      if(tags.includes(tag)){
        return(node)
      }
    });


  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>
          <div>
            <Container>
              <div className="tag-container">
                {group.map(item => {
                  return (
                    <div className="tag-item" key={item.fieldValue}>
                      <Link to={`/?tag=${kebabCase(item.fieldValue)}`}>
                        {item.fieldValue}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </Container>
          </div>
          <PostList posts={posts} />
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
    allMarkdownRemark(limit: 2000, sort: {fields: frontmatter___date}, filter: {frontmatter: {draft: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            title
            type
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`