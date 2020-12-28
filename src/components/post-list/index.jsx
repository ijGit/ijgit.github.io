import React from "react"
import styled from "styled-components"
import { PostItem } from "./item"


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


export const PostList = ({posts, isSearchpage=false}) =>{

  return(
    <Container>
      <ul>
        {
          posts.map(node=> {
            node = isSearchpage? node : ((node.node));
            const title = isSearchpage? node.title : node.frontmatter.title
            const tags = isSearchpage? node.tags : node.frontmatter.tags
            const date = isSearchpage? node.date : node.frontmatter.date
            const slug = isSearchpage? node.slug : node.fields.slug

            var type = node.frontmatter.type
            type = type === null || type === undefined ? 'default' : type;
            
            return(
              <li key = {slug}>
                <PostItem
                  title={title}
                  tags={tags}
                  date={date}
                  type={type}
                  slug={slug}/>
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}
