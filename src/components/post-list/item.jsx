import React from "react"
import {TagList} from '../tags/tags'
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  padding-bottom: 5vh;
  border-bottom: 1px solid #8383837e;


  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 479px){
    flex-direction: column;
  }


  align-items: center;
  .title{
    width: 60%;
    max-width: 60%;
    display: flex;
    margin-right: auto;
    
    .title-text{
      margin-block-start: 0;
      margin-block-end: 0;
      font-weight: 500;
      line-height: 1.3;
      font-size: 1em;
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


export const PostItem = ({ title, tags, date, excerpt, slug }) => {
  return (
    <div>
      <Container>
        <div className='title'>
          <Link to={slug}><h3 className='title-text'>{title}</h3></Link>
        </div>
        <div className='meta'>
          <div className='tags'><TagList tags={tags} /></div>
          <div className='date'>{date}</div>
        </div>
      </Container>
    </div>
  )
}
