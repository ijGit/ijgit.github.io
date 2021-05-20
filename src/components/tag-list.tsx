import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'


const TagsContainer = styled.div` 
  display: inline-block;

  .tag-item{
    display: inline-block;
    color: #ffffff;
    background: #1976d2;
    padding: 2px 6px;
    border-radius: 4px;
    opacity: .5;
    margin-right: .5rem;
  
    a:hover{
      opacity: 1;
    }
  }
  .tag-item:hover{
    opacity: 1;
    margin-right: .5rem;
  }
`

export const TagList = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag) => {
        return (
            <div className='tag-item'
              key={tag}>
              <Link to={`/?tag=${tag.split(" ").join("")}`}>{tag}</Link>
            </div>
        );
      })}
    </TagsContainer>
  );
};
