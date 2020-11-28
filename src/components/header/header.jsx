
import React from "react";
import { Link } from "gatsby";
import {title} from "../../../_config";

const Header = () =>(
  <header id="header">
    <div className="header-title">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  </header>
)

export default Header