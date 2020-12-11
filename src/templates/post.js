import React from 'react'
// import { useEffect, useState, useCallback, Suspense, useRef } from 'react';
// import { useColorMode } from 'theme-ui';
import { graphql } from "gatsby"
import { Layout } from './../components/layout/layout'
import './../styles/code-style.scss'
import { Comment } from './../components/comment/comment'
import { TOC } from './../components/toc/toc'

import styled from 'styled-components';
import './post.scss';


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

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark;
  return (
    <Layout siteData={data.site}>
      <main>
        <div className='toc-fullsize'>
          <TOC toc={tableOfContents} />
        </div>
        <section id="content">
          <article>
            <div className="blog-post-container">
              <div className="blog-post">
                <MetaWrapper>
                  <h1>{frontmatter.title}</h1>
                  <div className="date">{frontmatter.date}</div>

                  <div className="tags">
                    {frontmatter.tags.forEach(tag => {
                      return (<span>{tag}</span>)
                    })}
                  </div>
                </MetaWrapper>
                <div className='toc-smallsize'>
                  <TOC toc={tableOfContents}/>
                </div>

                <div
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
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
      tableOfContents(maxDepth: 3)
    }
  }
`