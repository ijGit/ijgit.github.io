import React from "react"
import styled from "styled-components"

const TagsContainer = styled.div` 
  display: inline-block;

  font-size: 0.85rem;
  opacity: 0.7;

  .item{
    margin-right: .5rem;
  }
  .item:before{
    content: '#';
  }
`

export const TagList = ({ tags }) => {
  return(
    <TagsContainer>
      {tags.map(tag => {
        return (<span className='item' key={tag}>{tag}</span>)
      })}
    </TagsContainer>
  )
}