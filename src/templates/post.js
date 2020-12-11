import React from 'react'
// import { useEffect, useState, useCallback, Suspense, useRef } from 'react';
// import { useColorMode } from 'theme-ui';
import { graphql } from 'gatsby'
import {Layout} from './../components/layout/layout'
import {Comment} from './../components/comment/comment'
import './../styles/code-style.scss'
import 'katex/dist/katex.min.css'


import styled from 'styled-components';
const PostContentWrapper = styled.div`
  h1, h2, h3{
    margin-top: 2em;
    margin-bottom: 1em;
  }
  h4, h5, h6{
    margin-top: 1em;
    margin-bottom: .5em;
  }
  margin-top: 1rem;
`
const MetaWrapper = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #8383837e;
  .date, .tags{
    font-size: .9rem;
    font-weight: 400;
    opacity: .8;
  }
  .tags{
    span{margin-right: .5em;}
    span:before{content: '#';}   }
  }
`

export default function PostTemplate({ data }) {
//  const [colorMode] = useColorMode();

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  
  return (
    <Layout>
      <section>


    <article>
      <div className="blog-post-container">
        <div className="blog-post">
          <MetaWrapper>
            <h1>{frontmatter.title}</h1>
            <div className="date">{frontmatter.date}</div>
            <div className="tags">{frontmatter.tags}</div>
          </MetaWrapper>
          <PostContentWrapper
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      </div>
    </article>
    <div>

      <Comment></Comment>
    </div>
    </section>
</Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
      fields{
        slug
      }
    }
  }
  `