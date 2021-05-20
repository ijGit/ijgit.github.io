import React from "react"
import {TagList} from '../tag-list'
import { Link } from "gatsby"
import './post-item.scss'
// import _type from './../../../config/type'


export const PostItem = ({ title, type, tags, date, slug }) => {
  return (
      <div className='post-item'>
        <div className='title'>
          <div className='title-type'>
            {/*<Icon name={type} icon={{'width':17, 'height':17}} />*/}
          </div>
          <Link to={slug}>
            <span  className='title-text'>{title}</span></Link>
        </div>
        <div className='meta'>
          <div className='tags'><TagList tags={tags} /></div>
          <div className='date'>{date}</div>
        </div>
      </div>
  )
}
