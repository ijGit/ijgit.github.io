import React from "react"
import { Link } from "gatsby"
//import { faGithub } from "@fortawesome/free-brands-svg-icons"
//import { faAt } from "@fortawesome/free-solid-svg-icons"
import { email, github } from '../../config/config'

// display: `inline-block`,
const ListLinkItem = props => (
  <li>
    <span>
      <Link to={props.to}>
        /
        {props.children}
      </Link>
    </span>
  </li>
)
const ListItem = props => (
  <li>
    <span>
        {props.children}
    </span>
  </li>
)


export const Bio = () => {
  return (
    <div>
      {/* <div className="user-comment">{comment}</div> */}

      <ul
        style={{
          paddingInlineStart: `0px`,
          marginBlockStart: `.5em`,
          listStyle: `none`,
          fontSize: `.9em`
        }}
      >
        {/* <ListItem icon={faUserCircle}>{name}</ListItem> */}
        <ListItem>
          {email}
        </ListItem>
        <ListLinkItem to={github}>
          {github}
        </ListLinkItem>
      </ul>
    </div>
  )
}
