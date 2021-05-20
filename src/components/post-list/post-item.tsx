import React from "react"
import {TagList} from '../tag-list'
import { Link } from "gatsby"
import './../../components/post-list/post-item'
// import _type from './../../../config/type'


export const PostItem = ({ title, type, tags, date, slug }) => {
  return (
      <div className='post-item'>
        <div className='title'>
          <div className='title-type'>
            {/*<Icon name={type} icon={{'width':17, 'height':17}} />*/}
          </div>
          <Link to={slug}><h3 
            style={{
              marginBlockStart: `0px`,
              marginBlockEnd: `0px`, 
            }}
              className='title-text'>{title}</h3></Link>
        </div>
        <div className='meta'>
          <div className='tags'><TagList tags={tags} /></div>
          <div className='date'>{date}</div>
        </div>
      </div>
  )
}
