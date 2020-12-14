import React, { useEffect, useState } from "react"
import { Layout } from "../components/layout/layout"
import { graphql } from "gatsby"
import { Head } from "./../components/head/head"
import * as JsSearch from "js-search"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import { PostRep } from "../components/post-rep/post-rep"

import styled from "styled-components"

const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 0.9rem;
  margin-right: 0.4rem;
  width: 1.1rem;
  justify-content: center;
`

const Icon = styled.div`
  height: 0.9rem;
  margin-top: 1px;
  opacity: 0.9;
`

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
          <SearchContainer>
            <SearchInput onSubmit={handleSubmit}>
              <input
                id="Search"
                value={searchQuery}
                onChange={searchData}
                placeholder="Enter your search here"
              />
              <label htmlFor="Search" style={{ paddingLeft: "10px" }}>
                <IconWrapper>
                  <Icon>
                    <Fa icon={faSearch}></Fa>
                  </Icon>
                </IconWrapper>
              </label>
            </SearchInput>
            <SearchCount>
              Number of items:
              {queryResults.length}
            </SearchCount>
          </SearchContainer>


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
