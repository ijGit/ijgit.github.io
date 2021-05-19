import React from "react"
import { PostItem } from "./post-item"
import './../../styles/components/post-list/index.scss'


export default function PostList ({posts}){
  return(
    <div className='post-list'>
      <ul>
        {
          posts.map(({node}) => {

            const title = node.frontmatter.title
            const tags = node.frontmatter.tags
            const date = node.frontmatter.date
            const slug = node.fields.slug
            var type = node.frontmatter.type
            type = type === null || type === undefined ? 'default' : type;
            
            return(
              <li key = {slug}>
                <PostItem
                  title={title}
                  type={type}
                  tags={tags}
                  date={date}
                  slug={slug}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
