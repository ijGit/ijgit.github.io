import React from "react"
import { Link } from "gatsby"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle, faAt } from "@fortawesome/free-solid-svg-icons"
import { name, comment, email, github } from "../../../config/_config"
import {Icon} from '../icon'


import styled from "styled-components"

const Container = styled.div`
  transition: opacity 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
  font-size: .9em;
  opacity: .9;


  ul{
    padding-inline-start: .5em;
    margin: 0;
    li{
      margin: 0;
      list-style-type: none;
      white-space:nowrap;
    }
  }
  
`

// display: `inline-block`,
const ListLinkItem = props => (
  <li>
    <span>
      <Link to={props.to}>
        <Icon icon={props.icon}/>
        {props.children}
      </Link>
    </span>
  </li>
)
const ListItem = props => (
  <li>
    <span>
    <Icon icon={props.icon}/>
        {props.children}
    </span>
  </li>
)

export const Bio = () => {
  return (
    <Container>
      {/* <div className="user-comment">{comment}</div> */}

      <ul>
        {/* <ListItem icon={faUserCircle}>{name}</ListItem> */}
        <ListItem icon={faAt}>
          {email}
        </ListItem>
        <ListLinkItem to={github} icon={faGithub}>
          {github}
        </ListLinkItem>
      </ul>
    </Container>
  )
}
