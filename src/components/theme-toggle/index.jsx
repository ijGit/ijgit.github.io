import React from "react"
import styled from "styled-components"
import { useColorMode } from "theme-ui"


const Moon = () => {
  return(
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox='0 0 21 21' width='21px' height='21px'>
      <path 
        fill='none' stroke='#FFAB00'
        d='M8.9,3l.83,1.27-1.25.43,1.25-.43v0L11,5.1c-1.21-.82-1.27-.83-1.24-.85l.41-.42.41-.43m0,5.31,1.55-.21L11.77,10l.36-1.48,1.44.85L12.13,8.5l1.44-.85c-1.4.82-1.43.88-1.44.85L12,7.86l-.12-.64m2.73-.39.7-1.72,1.25,1.22L15.32,5.11l1.68-1-1.68,1v-2a15,15,0,0,1,0,2l-.69-.25-.69-.24M5.66,2.13a8.35,8.35,0,0,0,0,4.25,8.77,8.77,0,0,0,2.28,4A9.3,9.3,0,0,0,12.09,13a7.75,7.75,0,0,0,5,0c.56-.21,1.06-.6,1.24-.42s-.47,1.58-1,2.33a9.58,9.58,0,0,1-5.81,3.4A10.25,10.25,0,0,1,4.83,17a8.32,8.32,0,0,1-1.66-1.28A9.46,9.46,0,0,1,.68,11.47a10.32,10.32,0,0,1,.83-7.22A9,9,0,0,1,3.37,1.92C4.26,1.11,5.72.11,6.07.43S5.92,1.18,5.66,2.13Z'/>
      </svg>
  )
}

const Sun = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox='0 0 21 21' width='21px' height='21px'>
      <path
      stroke='#F44336' fill='none' strokeWidth = '2px'
        d='M13.7,6.17A5.29,5.29,0,0,0,10,4.61,5.19,5.19,0,0,0,6.26,6.17a5.28,5.28,0,0,0,3.72,9,5.13,5.13,0,0,0,3.72-1.56,5.25,5.25,0,0,0,1.56-3.72A5.15,5.15,0,0,0,13.7,6.17ZM10,0V3m5.28,1.63,2.17-2.13L14.9,5m2,4.89h3m-5,4.89,2.53,2.53M10,16.81v3m-4.91-5L2.54,17.31m.53-7.42H0M2.54,2.48,5.07,5'
      />
    </svg>
  )
}

//justify-content: space-around;
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
    top: 1px;
    left: 1px;
    height: 24px;
    width: 24px;

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
          <Moon/>
          <Sun/>
          <div className="slider"></div>
        </label>
      </div>
    </Container>
  )
}
