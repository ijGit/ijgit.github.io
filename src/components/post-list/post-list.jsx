import React from "react"
import styled from "styled-components"
import './post-item'
import { PostItem } from "./post-item"


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const List = styled.ul`
  margin-left: 0;
  padding: 0;
`
const Item = styled.li`
  list-style: none;
  margin-bottom: 9vh;
`

export const PostList = ({posts, isSearchpage=false}) =>{

  console.log(posts);
  
  return(
    <Container>
      <List>
        {
          posts.map(node=> {
            node = isSearchpage? node : ((node.node));
            const title = isSearchpage? node.title : node.frontmatter.title
            const tags = isSearchpage? node.tags : node.frontmatter.tags
            const date = isSearchpage? node.date : node.frontmatter.date
            const slug = isSearchpage? node.slug : node.fields.slug

            return(
              <Item key = {slug}>
                <PostItem
                  title={title}
                  tags={tags}
                  date={date}
                  excerpt={node.excerpt}
                  slug={slug}
                />
              </Item>
            )
          })
        }
      </List>
    </Container>
  )
}
