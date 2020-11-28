import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faLink, faAt } from '@fortawesome/free-solid-svg-icons';
import {name, comment, email, github, portfolio} from "../../../_config";

import "./bio.scss"

// display: `inline-block`,
const ListLink = props => (
  <li>
    <span>
      <Link to={props.to}>
        <Fa icon={props.icon}></Fa>
        
        {props.children}
      </Link>
      </span>
  </li>
)


const Bio = () => (
  <div id="bio">
    <div className="user-comment">
      {comment}
    </div>

    <ul className="user-info">
      <ListLink to={portfolio} icon={faUserCircle}>{name}</ListLink>
      <ListLink to={email} icon={faAt}>{email}</ListLink>
      <ListLink to={github} icon={faGithub}>{github}</ListLink>
    </ul>
  </div>
)

export default Bio