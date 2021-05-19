import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import {Bio} from './bio'

export const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header
      style={{
        width: `100%`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `stretch`,
        marginBottom: `2vh`
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `0 .5em`
        }}
      >

      <div className="header-title">
        <h1 style={{marginBlockEnd: `0px`, fontSize: `calc(13px + .9vh)`}}>
          <Link to={"/"}>{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
      <Bio/>
      </div>
    </header>
  );
};
