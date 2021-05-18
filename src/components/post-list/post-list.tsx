import React from "react"
import { PostItem } from "./post-item"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ul{
    list-style: none;
    margin-left: 0;
    margin: 0px;
    padding: 0px;

    li{
      list-style: none;
      margin-left: 0;
      margin: 0px;
      padding: 0px;
      border-bottom: 1px solid #8383837e;
    }
    li:first-child{
      border-top: 1px solid #8383837e;
    }
  }
`


export default function PostList ({posts}){
  return(
    <Container>
      <ul>
        {
          posts.map(({node}) => {

            const title = node.frontmatter.title
            const tags = node.frontmatter.tags
            const date = node.frontmatter.date
            const slug = node.fields.slug
            var type = node.frontmatter.type
            type = type === null || type === undefined ? 'default' : type;
            
            return(
              <li key = {slug}>
                <PostItem
                  title={title}
                  type={type}
                  tags={tags}
                  date={date}
                  slug={slug}/>
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}
