import React from "react"
import { IconButton } from "theme-ui";
import { Sun, Moon } from "./../components/icons";
import { useColorMode } from "theme-ui"

export const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <IconButton
      onClick={(e) => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
      }}>
       {colorMode === 'light' ? <Moon/> : <Sun/>}
    </IconButton>
  )
};
