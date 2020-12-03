import React, { useMemo } from 'react'
import _ from 'lodash';
import { Layout } from "../components/layout/layout";
import {Tags} from "./../components/tags/tags";

export default function Home({data}) {
  const group = data.allMarkdownRemark.group;
  const tags = useMemo(
    () => _.uniq(group.map(({ fieldValue }) => fieldValue)),
    []
  )
  console.log(tags);

  return(
    <>
    <Layout>

      <Tags tags={tags}></Tags>
    </Layout>

    </>
  ) 
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ){
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
  }
`
