import React from 'react'
import { graphql } from "gatsby"
import { Layout } from '../components/layout/layout'
import './../styles/code-style.scss'
import { Comment } from '../components/comment'
import { TOC } from '../components/toc/toc'
import { TagList } from '../components/tags'
import { Head } from "../components/head/head"

import styled from 'styled-components';
import "katex/dist/katex.min.css"
import './post.scss';


const MetaWrapper = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #8383837e;
  font-size: .9rem;
  font-weight: 400;

  .date{
    display: inline-block;
    margin-right: 1rem;
    opacity: .8;
  }
`

export default function PostTemplate({ data }) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt, tableOfContents } = markdownRemark;
  return (
    <>
    <Head title={frontmatter.title} description={excerpt} keywords={(frontmatter.tags)} />
    <Layout siteData={data.site}>
      <div className='toc-fullsize'>
        <TOC toc={tableOfContents} />
      </div>

        <article>
            <div className="blog-post">

              <MetaWrapper>
                <h1 className='blog-post-title'>{frontmatter.title}</h1>
                <div className='date'>
                  {frontmatter.date}
                </div>
                <TagList tags={frontmatter.tags} />
              </MetaWrapper>

              <div className='toc-smallsize'>
                <TOC toc={tableOfContents} />
              </div>

              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />

            </div>
        </article>
        <div>

          <Comment></Comment>
        </div>
    </Layout>
    </>
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
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        keywords
      }
      fields{
        slug
      }
      tableOfContents(maxDepth: 3)
    }
  }
`