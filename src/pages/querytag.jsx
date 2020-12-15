import React from 'react'

import kebabCase from "lodash/kebabCase"
import { Layout } from "../components/layout/layout";
import { Link, graphql } from "gatsby"
import { Head } from "./../components/head/head"
import {PostList} from './../components/post-list/post-list'
import styled from "styled-components";
import queryString from 'query-string';

const page = 'querytag';  // for test


const TagList = styled.ul`
  margin-left: 0;
  text-align: center;
  margin-top: 2vh;

  li{
    font-size: 1rem;
    cursor: pointer;
    padding-left: 1vw;
    padding-right: 1vw;
    display: inline-block;
    
    a, a:visited{opacity: 0.6;}
    a:hover{opacity: .9;}

    margin: 3px;
  }

  margin-bottom: 8vh;
`


export default function IndexPage({ location, data }) {
  const {edges, group} = data.allMarkdownRemark;
  const query = queryString.parse(location.search);
  const tag = query.tag.toLowerCase();


  const posts = edges.filter(({node}) => {
    const tags = node.frontmatter.tags.map(tag =>{return tag.toLowerCase();});
    if(tags.includes(tag)){
      return(node)
    }
  });
    

  return (
    <>
    <Head title={data.site.siteMetadata.title} />
    <Layout siteData = {data.site}>
      <section id="content">
      <TagList>
          {group.map(item => {
            return (
              <li className='tag' key={item.fieldValue}>
                <Link to={`/${page}?tag=${kebabCase(item.fieldValue)}`}>
                    {item.fieldValue}
                </Link>
            </li>
            )
          })}
      </TagList>
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