import React from 'react';
import { Layout } from '../components/layout/layout';
import { graphql } from 'gatsby';

const errorDesc = {
  textAlign: 'center'
}

const errorCode = {
  fontSize: '5rem',
  textAlign: 'center'
}

const errorCodeDesc = {
  fontSize: '1.5rem',
  textAlign: 'center'
}

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

