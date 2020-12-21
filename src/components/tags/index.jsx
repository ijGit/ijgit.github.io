import React from "react"
import styled from "styled-components"

const TagsContainer = styled.div` 
  display: inline-block;

  font-size: 0.85rem;
  opacity: 0.5;
  
  .tag-item{
    opacity: 1;
    margin-right: .5rem;
  }
  .tag-item:hover{
    opacity: 1;
    margin-right: .5rem;
  }
`

export const TagList = ({ tags }) => {
  return(
    <TagsContainer>
      {tags.map(tag => {
        return (<span className='tag-item' key={tag}>{tag}</span>)
      })}
    </TagsContainer>
  )
}