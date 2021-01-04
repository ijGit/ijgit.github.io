import React from "react"
import styled from "styled-components"
import { useColorMode } from "theme-ui"
//import {Sun, Moon} from './../../constants/icon'
import {Icon} from './../../constants/icons'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .label {
    position: relative;
    background-color: #88d1ff;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: space-around;

    border-radius: 16px;
    pading: 5px;
    height: 26px;
    width: 50px;
  }
  .checkbox {
    position: absolute;
    height: 26px;
    width: 50px;
    opacity: 0;
    z-index: 1;
  }

  .slider {
    background-color: #fff;
    border-radius: 50%;

    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .checkbox:checked + .label .slider {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
  .checkbox:checked + .label{
    background-color: #001B43;
  }
`
/*

}
*/
export const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Container>
      <div class="switch">
        <input
          type="checkbox"
          className="checkbox"
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
          checked={colorMode === "default" ? false : true}
        />
        <label for="checkbox" className="label">
          <Icon name='moon' icon={{'width':21, 'height':21}} />
          <Icon name='sun' icon={{'width':21, 'height':21}} />
          <div className="slider"></div>
        </label>
      </div>
    </Container>
  )
}
