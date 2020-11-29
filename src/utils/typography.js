import Typography from 'typography'
//import CodePlugin from 'typography-plugin-code'
// import theme from 'typography-theme-stern-grove'
//import theme from 'typography-theme-grand-view'
import theme from 'typography-theme-wordpress-2012'

//theme.plugins = [new CodePlugin(),]

theme.baseFontSize= '16px';
theme.baseLineHeight= 1.6;
theme.headerWeight= 700;
theme.headerGray= 10;
theme.bodyGray= 10;
theme.headerFontFamily= ['Open Sans', 'Noto Sans KR', 'sans-serif'];
theme.bodyFontFamily= ['Noto Sans KR', 'sans-serif'];

theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h1,h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  },

  'a': {textDecoration: 'none'},
  'a:hover': {borderBottom: '1px solid #00000079'}

});

/*
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  headerWeight: 700,
  headerGray: 10,
  bodyGray: 10,
  headerFontFamily: ['Open Sans', 'Noto Sans KR', 'sans-serif'],
  bodyFontFamily: ['Noto Sans KR', 'sans-serif']
});*/

const typography = new Typography(theme);

export default typography;
export const rhythm = typography.rhythm
export const scale = typography.scale
