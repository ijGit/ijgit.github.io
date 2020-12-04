import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle, faAt } from "@fortawesome/free-solid-svg-icons"
import { name, comment, email, github } from "../../../_config"
// import {faLink} from '@fortawesome/free-solid-svg-icons';
import "../../styles/variables.scss"

import "./bio.scss"
import styled from "styled-components"

const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 0.9rem;
  margin-right: 0.4rem;
  min-width: 1.1rem;
  width: 1.1rem;
  justify-content: center;
`

const Icon = styled.div`
  height: 0.9rem;
  margin-top: 1px;
  opacity: 0.9;
`

// display: `inline-block`,
const ListLinkItem = props => (
  <li>
    <span>
      <Link to={props.to}>
        <IconWrapper>
          <Icon>
            <Fa icon={props.icon}></Fa>
          </Icon>
        </IconWrapper>
        {props.children}
      </Link>
    </span>
  </li>
)
const ListItem = props => (
  <li>
    <span>
        <IconWrapper>
          <Icon>
            <Fa icon={props.icon}></Fa>
          </Icon>
        </IconWrapper>
        {props.children}
    </span>
  </li>
)

export const Bio = () => {
  return (
    <div className='bio'>
      <div className="user-comment">{comment}</div>

      <ul className="user-info">
        <ListLinkItem icon={faUserCircle}>
          {name}
        </ListLinkItem>
        <ListItem icon={faAt}>
          {email}
        </ListItem>
        <ListLinkItem to={github} icon={faGithub}>
          {github}
        </ListLinkItem>
      </ul>
    </div>
  )
}
