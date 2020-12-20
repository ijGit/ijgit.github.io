import React from "react"
import {TagList} from '../tags/tags'
import { Link } from "gatsby"
import styled from "styled-components"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import {Icon} from './../icon'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 3vh 0;
  border-bottom: 1px solid #8383837e;
  
  @media screen and (max-width: 479px){
    flex-direction: column;
  }
  


  .title{
    width: 60%;
    max-width: 60%;
    display: flex;
    margin-right: auto;
    
    height: 2.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    
    .title-text{
      display: flex;
      flex-direction: row;

      margin-block-start: 0;
      margin-block-end: 0;

      font-weight: 500;
      line-height: 1.3;
      font-size: 1em;
    }
    .title-text:before{
      content: '📄';
      margin-right: 4px;
    }

    @media screen and (max-width: 479px){
      width: 100%;
      max-width: 100%;
    }
  }

  .meta{
    display: flex;
    width: 35%;
    max-width: 35%;
    justify-content: flex-end;
    
    @media screen and (max-width: 479px){
      width: 100%;
      max-width: 100%;
      justify-content: flex-start;
    }

    .tags{
      display: inline-flex;
      
      .item {
        margin-right: 0.5rem;
      }
      .item:before {
        content: "#";
      }
    }
    .date{
      display: inline-flex;
      font-size: 0.85rem;
      opacity: 0.9;
      white-space: nowrap;
    }
  }
`


export const PostItem = ({ title, tags, date, slug }) => {
  return (
      <Container>
        <div className='title'>
          <Link to={slug}><span className='title-text'>{title}</span></Link>
        </div>
        <div className='meta'>
          <div className='tags'><TagList tags={tags} /></div>
          <div className='date'>{date}</div>
        </div>
      </Container>
  )
}
