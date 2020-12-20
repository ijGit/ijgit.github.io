import React, { useEffect, useState } from "react"
import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import { PostList } from "../components/post-list/index"
import styled from "styled-components"
import queryString from "query-string"

import * as JsSearch from "js-search"
import { faSearch, faTags } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "./../components/icon"

const Container = styled.div`
.search-input{

  display: flex;
  width: 100%;
  max-width: 500px;
  
  border-radius: 8px;
  border: 1px solid;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  opacity: 0.6;
  font-size: inherit;
  padding: 8px 10px;
  
  margin: 0 auto;
  margin-bottom: 10vh;
  
  .input {
    width: 100%;
    justify-content: center;
    align-items: center;
    
    border: none;
    outline: none;
    
    background: none;
    color: inherit;
  
  }
}
  `
  
export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  const { title } = data.site.siteMetadata
  var posts = []
  edges.map(({ node }) => {
    var _node = {
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: node.frontmatter.tags,
      excerpt: node.excerpt,
    }
    posts.push(_node)
  })
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postList, setPostList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [queryResults, setQueryResults] = useState(posts)

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search("id")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")

    dataToSearch.addIndex("title")
    dataToSearch.addIndex("excerpt")
    dataToSearch.addIndex("tags")
    dataToSearch.addDocuments(posts)
    setSearch(dataToSearch)
  }
  const searchData = e => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setQueryResults(searchQuery === "" ? postList : searchResults)
    setSearchResults(queryResult)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  useEffect(() => {
    setPostList(posts)
    rebuildIndex()
  }, [])

  return (
    <>
      <Head title={title} />
      <Layout siteData={data.site}>
        <section id="content">

          <div>
            <Container>
              <div className="search-input" onSubmit={handleSubmit}>
                <input
                  className="input"
                  value={searchQuery}
                  onChange={searchData}
                  placeholder="Search.."
                />
                <span style={{ paddingLeft: "10px" }}>
                  <Icon icon={faSearch} />
                </span>
              </div>
            </Container>

            <Icon icon={faTags} />
          </div>

          <PostList isSearchpage={true} posts={queryResults} />
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
      pathPrefix
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            tags
            title
          }
        }
      }
    }
  }
`
