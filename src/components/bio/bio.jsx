import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle, faAt } from "@fortawesome/free-solid-svg-icons"
import { name, comment, email, github, portfolio } from "../../../_config"
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
const ListLink = props => (
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

export const Bio = () => {
  const emailLink = `mailto:${email}`
  return (
    <div id="bio">
      <div className="user-comment">{comment}</div>

      <ul className="user-info">
        <ListLink to={portfolio} icon={faUserCircle}>
          {name}
        </ListLink>
        <ListLink to={emailLink} icon={faAt}>
          {email}
        </ListLink>
        <ListLink to={github} icon={faGithub}>
          {github}
        </ListLink>
      </ul>
    </div>
  )
}
