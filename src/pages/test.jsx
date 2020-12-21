import React, { Component, useEffect, useState, useMemo } from "react"
import Select from "react-select"
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
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 2vh;

  .tag-container {
    width: 100%;
    
    .tag-item{
      margin: 4px;
    }

    margin-bottom: 8vh;
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
  const { group, edges } = data.allMarkdownRemark
  const { title } = data.site.siteMetadata
  const query = queryString.parse(window.location.search)

  const tag =
    query.tag === null || query.tag === undefined
      ? "null"
      : query.tag.toLowerCase()
  
  const posts = (tag == 'null') ? edges : edges.filter(({ node }) => {
    const tags = node.frontmatter.tags.map(tag => {
      tag = tag
        .split(/[\_\ \. \/]/)
        .join("-")
        .split(/[\_\ \. \/ \+]/)
        .join("")
      return tag.toLowerCase()
    })
    if (tags.includes(tag)) {
      return node
    }
  })

  // for search
  var searchPosts = []
  posts.map(({ node }) => {
    var _node = {
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: node.frontmatter.tags,
      excerpt: node.excerpt,
    }
    searchPosts.push(_node)
  })
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postList, setPostList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [queryResults, setQueryResults] = useState(searchPosts)

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search("id")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")

    dataToSearch.addIndex("title")
    dataToSearch.addIndex("excerpt")
    dataToSearch.addIndex("tags")
    dataToSearch.addDocuments(searchPosts)
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
    setPostList(searchPosts)
    rebuildIndex()
  }, [])

  return (
    <>
      <Head title={title} />
      <Layout siteData={data.site}>
        <section id="content">
          <div>
            <Container>
              <div className="tag-container">
                {group.map(item => {
                  return (
                    <div className="tag-item" key={item.fieldValue}>
                      <Link to={`/tags?tag=${kebabCase(item.fieldValue)}`}>
                        {item.fieldValue}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div className="search-input" onSubmit={handleSubmit}>
                <input
                  id="search"
                  value={searchQuery}
                  onChange={searchData}
                  placeholder="Search.."
                />
                <Icon className="search-icon" icon={faSearch} />
              </div>
            </Container>
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
