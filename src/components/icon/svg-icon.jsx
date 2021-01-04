// @flow strict
import React from 'react';
import styled from "styled-components"

const Container = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  font-style: normal;
  font-weight: normal;
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`



const MyIcon = ({ name, icon }) => (
  <Container viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </Container>
);

export default MyIcon;
