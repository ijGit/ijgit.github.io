import React from "react"
import {TagList} from '../tags'
import { Link } from "gatsby"
import styled from "styled-components"
import _type from './../../../config/type'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 3vh 0;
  
  @media screen and (max-width: 479px){
    flex-direction: column;
  }
  
  .title{
    width: 60%;
    max-width: 60%;
    display: flex;
    margin-right: auto;
    align-items: center;
    flex-direction: row;
    
    .title-type{
      align-items: stretch;
      margin-right: 4px;
      margin-bottom: auto;

      line-height: 1.3;
      font-size: 1em;
    }
    
    .title-text{
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
      height: 2.6;
      
      overflow: hidden;
      text-overflow: ellipsis;
      
      font-weight: 500;
      line-height: 1.3;
      font-size: 1em;
      
      @media screen and (max-width: 479px){
        height: 1.3;
        -webkit-line-clamp: 1; 
      }
    }
    
    @media screen and (max-width: 479px){
      width: 100%;
      max-width: 100%;
      margin-bottom: .8em;
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


export const PostItem = ({ title, type, tags, date, slug }) => {
  return (
      <Container>
        <div className='title'>
          <div className='title-type'>
            {_type[type]}
            {/*<Icon name={type} icon={{'width':17, 'height':17}} />*/}
          </div>
          <Link to={slug}><span className='title-text'>{title}</span></Link>
        </div>
        <div className='meta'>
          <div className='tags'><TagList tags={tags} /></div>
          <div className='date'>{date}</div>
        </div>
      </Container>
  )
}
