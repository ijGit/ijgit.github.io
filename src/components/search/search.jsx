import React, { Component } from "react"
import styled from "styled-components";
import { faSearch, faTags } from "@fortawesome/free-solid-svg-icons"
import {Icon} from './../icon'
import * as JsSearch from "js-search"


const Container = styled.div`
  display: flex;
  
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid;
  opacity: .6;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  .search-input{
    width: 100%;
    border: none;
    outline: none;
    background: none;

    color: inherit;
  }

`

export const SearchBox = () => {
  return(
    <Container>
      <input type='search' className='search-input' placeholder='Search'/>
      <span className='search-icon'><Icon icon={faSearch}/></span>
    </Container>
  )
}