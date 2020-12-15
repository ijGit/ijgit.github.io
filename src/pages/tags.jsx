import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"
import { Head } from "../components/head/head"
import {PostList} from '../components/post-list/post-list'
import styled from "styled-components";
import queryString from 'query-string';


const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  .tag{
    display: inline-block;
    padding-left: 1vw;
    padding-right: 1vw;

    cursor: pointer;
    font-size: 1rem;
    a, a:visited{opacity: 0.6;}
    a:hover{opacity: .9;}
    margin: 3px;
  }
  margin-bottom: 8vh;
`

export default function IndexPage({ location, data }) {
  const {edges, group} = data.allMarkdownRemark;
  const query = queryString.parse(location.search);
  const tag = query.tag ===null || query.tag === undefined ? 'undefined' : query.tag.toLowerCase();
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
    <Layout siteData = {data.site}>
      <section id="content">
      <TagsContainer>
          {group.map(item => {
            return (
              <div className='tag' key={item.fieldValue}>
                <Link to={`/tags?tag=${kebabCase(item.fieldValue)}`}>
                    {item.fieldValue}
                </Link>
            </div>
            )
          })}
      </TagsContainer>
      <PostList  posts={posts}/>
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
    }
    allMarkdownRemark(limit: 2000, sort: {fields: frontmatter___date}) {
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
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`