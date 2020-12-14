import React, { useEffect } from 'react';
import { Component, useState } from 'react'
import { Layout } from '../components/layout/layout';
import { graphql } from 'gatsby';
import { Head } from "./../components/head/head"
import Search from './../components/search/search'
import * as JsSearch from "js-search"

import {PostRep} from '../components/post-rep/post-rep'


export default function SearchPage ({data}) {
  const {edges} = data.allMarkdownRemark;

  // need make new json array
  var posts = [];
  edges.map(({node}) => {
    var _node = {
      'id': node.id,
      'slug': node.fields.slug, 
      'title': node.frontmatter.title, 
      'date': node.frontmatter.date, 
      'tags': node.frontmatter.tags, 
      'excerpt': node.excerpt,
    }
    posts.push(_node);
  });

  
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

    setSearch(dataToSearch);
//    console.log(dataToSearch);

    setIsLoading(false);
  }

  const searchData = e => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value);
    setQueryResults(searchQuery === "" ? postList : searchResults)
    setSearchResults(queryResult);

//    console.log(e.target.value);
//    console.log(queryResult);
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  useEffect(() => {
    setPostList(posts);
    rebuildIndex()
//    console.log(isLoading);
  }, []);


//  <Search/>
  
  return (
    <>
    <Head title={data.site.siteMetadata.title} />
    <Layout siteData = {data.site}>
      <main>
      <section id="content">
      <div>search temp page</div>

      <section>
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                Enter your search here
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
          <div>
            Number of items:
            {queryResults.length}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "4px",
                border: "1px solid #d3d3d3",
              }}
            >
              <thead style={{ border: "1px solid #808080" }}>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Book ISBN
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Book Title
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Book Author
                  </th>
                </tr>
              </thead>
              <tbody>
                {queryResults.map(node => {
                  return (
                    <>
                    <PostRep
                      title = {node.title}
                      tags = {node.tags}
                      date = {node.date}
                      excerpt = {node.excerpt}
                      slug = {node.slug}
                    />


                    <tr key={`row_${node.id}`}>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {node.id}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {node.title}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {node.tags}
                      </td>
                    </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      </section>



      </section>
      </main>
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
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(format: PLAIN)
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

