import React, { useEffect, useState } from "react"
import { Layout } from "../components/layout/layout"
import { graphql } from "gatsby"
import { Head } from "./../components/head/head"
import * as JsSearch from "js-search"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {PostList} from './../components/post-list/post-list'
import {Icon} from './../components/icon'
import styled from "styled-components"


const SearchContainer = styled.div`
display: flex;
width: 70%;
flex-direction: column;
margin: 0 auto;
margin-bottom: 10vh;
`

const SearchInput = styled.div`
justify-content: center;
align-items: center;
  display: flex;
  input{
    flex: auto;
  }
`

const SearchCount = styled.div`
  opacity: .7;
`

export default function SearchPage({ data }) {
  const { edges } = data.allMarkdownRemark

  // need make new json array
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
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>
        <section id="content">
          <SearchContainer>
            <SearchInput onSubmit={handleSubmit}>
              <input
                id="Search"
                value={searchQuery}
                onChange={searchData}
                placeholder="Enter your search here"
              />
              <label htmlFor="Search" style={{ paddingLeft: "10px" }}>
                <Icon icon={faSearch}/>
                
              </label>
            </SearchInput>
            <SearchCount>
              search result :
              {queryResults.length}
            </SearchCount>
          </SearchContainer>

          <PostList isSearchpage={true} posts={queryResults}/>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
