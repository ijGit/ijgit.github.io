// src/components/icon

import React from "react"

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-flex;
  font-size: 0.9rem;
  margin-right: 0.4rem;
  width: 1.1rem;
  height: 0.9rem;
  justify-content: center;
`

const Item = styled.div`
  display: inline-block;
  opacity: inherit;
  font-size: inherit;
`
export const Icon = ({icon}) => {
  return (
    <Wrapper>
      <Item className='icon-item'>
        <Fa icon={icon}></Fa>
      </Item>
    </Wrapper>
  )
}
