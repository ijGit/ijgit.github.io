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

export default function NotFoundPage ({data}) {
  return (
    <Layout siteData = {data.site}>
      <div>
        <div className="error-title">
          <h1 style={errorCode}>Error :(</h1>
          <p style={errorCodeDesc}>404: Not Found</p>
        </div>
        <div style={errorDesc}>
          The Page you are looking for doesn't exist or another error occurred.
          Go back, or Main page
        </div>
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

