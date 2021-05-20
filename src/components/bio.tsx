import React from "react";
import { Link } from "gatsby";
import { email, github } from "../../config/config";
import { EmailIcon, GitIcon } from "./icons";
import styled from "styled-components";

// display: `inline-block`,
const BioList = styled.ul`
  padding-inline-start: 0px;
  margin-inline-start: 0px;
  list-style-type: none;
  font-size: 0.9em;

  li {
    margin-bottom: 0.3rem;
    div {
      display: flex;

      .bio-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 1.1rem;

        margin-right: 4px;

        svg {
          width: 1rem;
          height: 1rem;
        }
      }
      .bio-info {
      }
    }
  }
`;

const ListItem = (props) => (
  <li>
    <div>
      <span className="bio-icon">{props.icon}</span>
      <span className="bio-info">{props.children}</span>
    </div>
  </li>
);

export const Bio = () => {
  return (
    <BioList>
      <ListItem icon={<EmailIcon />}>{email}</ListItem>

      <ListItem icon={<GitIcon />}>{github}</ListItem>
    </BioList>
  );
};
