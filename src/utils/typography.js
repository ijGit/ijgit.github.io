import Typography from 'typography';
import theme from 'typography-theme-wordpress-2012';

theme.baseFontSize= '16px';
theme.baseLineHeight= 1.6;
theme.headerWeight= 700;
theme.bodyWeight=500;
theme.headerGray= 10;
theme.bodyGray= 10;
//theme.headerFontFamily= ['Noto Sans KR', 'sans-serif'];
//theme.bodyFontFamily= ['Noto Sans KR', 'sans-serif'];


theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({

  body: {
    headerFontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
    bodyFontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
  },

  'h1,h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  },

  'a': {textDecoration: 'none'},
  'a:hover': {borderBottom: '1px solid #00000079'},

  blockquote: {
    fontSize: '0.9rem',
    fontFamily: ['Noto Serif KR', 'serif'].join(','),
    margin: 0,
    marginLeft: rhythm(1),
    borderLeft: `${rhythm(3/16)} solid #00000083`,
    opacity: 0.95,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  }

});


const typography = new Typography(theme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
