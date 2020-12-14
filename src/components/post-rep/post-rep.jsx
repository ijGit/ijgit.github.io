import React from "react"
import {TagList} from './../tags/tags'
import { Link } from "gatsby"
import styled from "styled-components"


const PostRepHeader = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1vh;
`
const PostRepDate = styled.div`
  display: inline-block;
  font-size: 0.85rem;
  opacity: 0.7;
  padding-right: 0.5rem;
`
const PostRepTags = styled.div`
  display: inline-block;
  margin-left: 1rem;

  font-size: 0.85rem;
  opacity: 0.7;

  .item {
    margin-right: 0.5rem;
  }
  .item:before {
    content: "#";
  }
`

const PostRepExcerpt = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;

  -webkit-line-clamp: 2;
  line-height: 1.5rem;
  height: 3rem;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PostRep = ({ title, tags, date, excerpt, slug }) => {
  return (
    <div>
      <PostRepHeader>
        <Link to={slug}>{title}</Link>
      </PostRepHeader>

      <PostRepDate className="post-rep-date">
        {date}
      </PostRepDate>

      <PostRepTags>
        <TagList tags={tags} />
      </PostRepTags>

      <PostRepExcerpt className="post-rep-excerpt">
        {excerpt}
      </PostRepExcerpt>
    </div>
  )
}
