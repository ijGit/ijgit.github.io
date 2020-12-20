import React, { useEffect, useState } from "react"
import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import {PostList} from '../components/post-list/index'
import styled from "styled-components";
import queryString from 'query-string';

import * as JsSearch from "js-search"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {Icon} from './../components/icon'


const SearchContainer = styled.div`
display: flex;
width: 100%;
max-width: 600px;
flex-direction: column;
margin: 0 auto;
margin-bottom: 10vh;

.search-input{
  justify-content: center;
  align-items: center;
  display: flex;
  input{
    flex: auto;
  }
}
.search-count{
  display: flex;
  margin-right: auto;
  opacity: .7;
}
`


export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  const {title} = data.site.siteMetadata;
  var posts = [];
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
  });
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
    <Head title={title}/>
    <Layout siteData={data.site}>
        <section id="content">
        <SearchContainer>
            <div className='search-input' onSubmit={handleSubmit}>
              <input
                id="Search"
                style={{ padding: "4px 8px" }}
                value={searchQuery}
                onChange={searchData}
                placeholder="Enter your search here"
              />
              <label htmlFor="Search" style={{ paddingLeft: "10px" }}>
                <Icon icon={faSearch}/>
              </label>
            </div>
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
    allMarkdownRemark(limit: 2000, 
      sort: { fields: [frontmatter___date], order: DESC } 
      filter: {frontmatter: {draft: {ne: false}}}) {
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
