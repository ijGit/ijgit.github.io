import React from "react";
import { graphql } from "gatsby";
import Title from "./../components/title";
import Layout from "./../components/layout";

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  return (
    <Layout>
      <article>
        <Title
          title={frontmatter.title}
          date={frontmatter.date}
          tags={frontmatter.tags}
        ></Title>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        keywords
      }
      fields {
        slug
      }
    }
  }
`;
