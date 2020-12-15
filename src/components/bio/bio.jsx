import React from "react"
import { Link } from "gatsby"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle, faAt } from "@fortawesome/free-solid-svg-icons"
import { name, comment, email, github } from "../../../_config"
import {Icon} from './../icon'


import styled from "styled-components"

const BioContainer = styled.div`
  transition: opacity 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
  font-size: .9em;
  opacity: .9;
`

const BioListContainer = styled.ul`
margin-left: 0;
`
const BioList = styled.ul`
  margin: 0;
  list-style-type: none;
`

// display: `inline-block`,
const ListLinkItem = props => (
  <BioList>
    <span>
      <Link to={props.to}>
        <Icon icon={props.icon}/>
        {props.children}
      </Link>
    </span>
  </BioList>
)
const ListItem = props => (
  <BioList>
    <span>
    <Icon icon={props.icon}/>
        {props.children}
    </span>
  </BioList>
)

export const Bio = () => {
  return (
    <BioContainer>
      <div className="user-comment">{comment}</div>

      <BioListContainer>
        <ListItem icon={faUserCircle}>
          {name}
        </ListItem>
        <ListItem icon={faAt}>
          {email}
        </ListItem>
        <ListLinkItem to={github} icon={faGithub}>
          {github}
        </ListLinkItem>
      </BioListContainer>
    </BioContainer>
  )
}
