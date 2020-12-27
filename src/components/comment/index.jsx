import React, { useRef, useEffect } from 'react';
import config from '../../../config/_config'
import { useColorMode } from 'theme-ui';

export const Comment = () => {
  const [colorMode] = useColorMode();
  const src="https://utteranc.es/client.js";
  const utterancesSelector = 'iframe.utterances-frame';
  const LIGHT_THEME = 'github-light';
  const DARK_THEME = 'photon-dark'; // "dark-blue" 
  const containerRef = useRef(null);
  useEffect(()=>{
    
    const themeMode = colorMode === 'dark' ? DARK_THEME : LIGHT_THEME;
    const createUtterancesEl = () => {
      const comment = document.createElement('script');
      const attributes = {
        'src': `${src}`,
        'repo': config.githubInfo,
        'issue-term': "pathname",
        'theme': themeMode,
        'crossorigin': 'anonymous',
        'async': true,
        "chromeWebSecurity": false,
        "modifyObstructiveCode": false
      };
      Object.entries(attributes).forEach(([key, value]) => {
        comment.setAttribute(key, value);
      });
      containerRef.current.appendChild(comment);
    }
    const postThemeMessage = () => {
      const message = {
        type: 'set-theme',
        theme: themeMode,
      };
      utterancesEl.contentWindow.postMessage(message, src);
    };
    const utterancesEl = containerRef.current.querySelector(utterancesSelector);
    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [colorMode]);
  return <div ref={containerRef} />;
}



// reference: https://www.sungikchoi.com/blog/gatsby-dark-mode/