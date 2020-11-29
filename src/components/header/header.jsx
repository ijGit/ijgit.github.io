
import React from "react";
import { Link } from "gatsby";

export const Header = ({siteData}) => {
  return(
    <header id='header'>
      <div className='header-title'>
        <h1>
          <Link to={siteData.pathPrefix}>
            {siteData.siteMetadata.title}
          </Link>
        </h1>
      </div>
    </header>
  )
}