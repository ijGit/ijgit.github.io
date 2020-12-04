
import React from "react";
import { Link } from "gatsby";

import './header.scss';

export const Header = ({title, category}) => {
  return(
    <header id='header'>
      <div className='header-logo'>
        
        <span className='header-title'>
          <h1 style={{paddingLeft:'1rem'}}>
            <Link to={'/'}>{title}</Link>
          </h1>
        </span>
        <span className='path'> /{category}</span>
      </div>
    </header>
  )
}