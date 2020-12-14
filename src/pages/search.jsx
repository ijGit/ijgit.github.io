import React, { useEffect } from "react"
import { Component, useState } from "react"
import { Layout } from "../components/layout/layout"
import { graphql } from "gatsby"
import { Head } from "./../components/head/head"
import Search from "./../components/search/search"
import * as JsSearch from "js-search"

import { PostRep } from "../components/post-rep/post-rep"

import styled from "styled-components"

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PostList = styled.ul`
  margin-left: 0;
  padding: 0;
`
const PostItem = styled.li`
  list-style: none;
  margin-bottom: 9vh;
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
  const [isLoading, setIsLoading] = useState(true)
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
    //    console.log(dataToSearch);

    setIsLoading(false)
  }

  const searchData = e => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setQueryResults(searchQuery === "" ? postList : searchResults)
    setSearchResults(queryResult)

    //    console.log(e.target.value);
    //    console.log(queryResult);
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  useEffect(() => {
    setPostList(posts)
    rebuildIndex()
    //    console.log(isLoading);
  }, [])

  //  <Search/>

  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout siteData={data.site}>
        <section id="content">
          <div>
            <form onSubmit={handleSubmit}>
              <div style={{ margin: "0 auto" }}>
                <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                </label>
                <input
                  id="Search"
                  value={searchQuery}
                  onChange={searchData}
                  placeholder="Enter your search here"
                  style={{ margin: "0 auto", width: "400px" }}
                />
              </div>
            </form>
          </div>

          <div>
            Number of items:
            {queryResults.length}
          </div>

          <PostListContainer>
            <PostList>
              {queryResults.map(node => {
                return (
                  <PostItem key={node.id}>
                    <div className="post-rep">
                      <PostRep
                        title={node.title}
                        tags={node.tags}
                        date={node.date}
                        excerpt={node.excerpt}
                        slug={node.slug}
                      />
                    </div>
                  </PostItem>
                )
              })}
            </PostList>
          </PostListContainer>
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
