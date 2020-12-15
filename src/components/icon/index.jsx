// src/components/icon

import React from "react"

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import styled from "styled-components"


const Wrapper = styled.div`
  display: inline-flex;
  font-size: 0.9rem;
  margin-right: 0.4rem;
  width: 1.1rem;
  justify-content: center;
`

const Item = styled.div`
  height: 0.9rem;
  margin-top: 1px;
  opacity: 0.9;
`
export const Icon = (icon) =>{
  return(
    <Wrapper>
      <Item>
        <Fa icon={icon}/>
      </Item>
    </Wrapper>
  )
}