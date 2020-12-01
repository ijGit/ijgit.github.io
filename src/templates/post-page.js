// src/template/post.js
import React from 'react';

import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout'

import './../styles/code-style.scss'
import './../styles/post-style.scss'

// export function Post({ props }) {
//   return (
//     <article>
//       <div className="blog-post-container">
//         <div className="blog-post">
//           <div className='post-meta'>
//             <div className="post-title">
//               <h1>{props.title}</h1>
//             </div>
//             <div>
//               <span className="post-date">{props.date}</span>
//               <span className="post-tag">{props.tags}</span>
//             </div>
//           </div>
//           <div
//             className="blog-post-content"
//             dangerouslySetInnerHTML={{ __html: props.html }}
//           />
//         </div>
//       </div>
//     </article>
//   )
// }



/*
data come from graphQL query then can be
rendered in our template
*/
export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const category = (post.frontmatter.category == null) ? 'undefined' : post.frontmatter.category;
  const root = data.site.siteMetadata.title;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const tags = post.frontmatter.tags;
  const html = post.html;

  return (
    <Layout root={root} title={title} category={category}>
      {/* <Post title = {title}
        date = {post.frontmatter.date}
        tags = {post.frontmatter.tags}
        html = {post.html}> 
      </Post> */}

      <article>
        <div className="blog-post-container">
          <div className="blog-post">
            <div className='post-meta'>
              <div className="post-title">
                <h1>title</h1>
              </div>
              <div>
                <span className="post-date">{date}</span>
                <span className="post-tag">{tags}</span>
              </div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
  query postQuery($slug: String!) {
    site {
      siteMetadata {
        title
        url
        language
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        tags
        keywords
      }
      fields {
        slug
      }
    }
  }
`