import React from 'react';
import { Layout } from '../components/layout/layout';
import { graphql } from 'gatsby';


export default function Search ({data}) {
  return (
    <Layout siteData = {data.site}>
      <div>
        search temp page
      </div>
    </Layout>
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
  }
`

