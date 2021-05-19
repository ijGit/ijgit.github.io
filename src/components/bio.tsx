import React from "react"
import { Link } from "gatsby"
import { email, github } from '../../config/config'

// display: `inline-block`,
const ListLinkItem = props => (
  <li>
    <span>
      <Link to={props.to}>
        <span>{props.icon}</span>
        {props.children}
      </Link>
    </span>
  </li>
)

const ListItem = props => (
  <li>
    <span>
        <span>{props.icon}</span>
        {props.children}
    </span>
  </li>
)


export const Bio = () => {
  return (
    <div>
      <ul
        style={{
          paddingInlineStart: `0px`,
          marginBlockStart: `.5em`,
          listStyle: `none`,
          fontSize: `.9em`
        }}
      >
        <ListItem >
          {email}
        </ListItem>

        <ListLinkItem to={github}>
          {github}
        </ListLinkItem>
      </ul>
    </div>
  )
}
