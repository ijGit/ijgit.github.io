import { useColorMode } from 'theme-ui';


export const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === 'light' ? 'dark' : 'light'
  return (
    <button onClick={ e => {
      setColorMode(nextColorMode)
    }}>
      color mode
    </button>
  );
};
