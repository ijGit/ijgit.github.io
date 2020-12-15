import React from "react"
import styled from "styled-components"
import './post-rep-item'
import { PostRepItem } from "./post-rep-item"



const PostRepListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PostList = styled.ul`
  margin-left: 0;
  padding: 0;
`
const PostItem = styled.li`
  list-style: none;
  margin-bottom: 9vh;
`

export const PostRepList = ({posts, isSearchpage=false}) =>{
  return(
    <PostRepListContainer>
      <PostList>
        {
          posts.map(node=> {
            node = isSearchpage? node : ((node.node));
            const title = isSearchpage? node.title : node.frontmatter.title
            const tags = isSearchpage? node.tags : node.frontmatter.tags
            const date = isSearchpage? node.date : node.frontmatter.date
            const slug = isSearchpage? node.date : node.fields.slug

            return(
              <PostItem key = {slug}>
                <PostRepItem
                  title={title}
                  tags={tags}
                  date={date}
                  excerpt={node.excerpt}
                  slug={slug}
                />
              </PostItem>
            )
          })
        }
      </PostList>
    </PostRepListContainer>
  )
}
