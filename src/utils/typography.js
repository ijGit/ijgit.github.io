import Typography from 'typography'
import wordpress from 'typography-theme-wordpress-2012'

wordpress.baseFontSize = '16px';
wordpress.baseLineHeight = 1.6;
wordpress.headerFontFamily = ["Open Sans", "Noto Sans KR", 'sans-serif'];
wordpress.headerWeight = 800;
wordpress.baseFontFamily = ["Noto Sans KR", 'sans-serif'];


wordpress.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  'h1,h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  },
  blockquote: {
    ...adjustFontSizeTo('19px'),
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1),
    borderLeft: `${rhythm(3/16)} solid rgba($color: #000000, $alpha: 0.5)`
  },
  'blockquote > :last-child': {
    marginBottom: 0
  }

});

const typography = new Typography(wordpress);

export default typography;
export const rhythm = typography.rhythm
export const scale = typography.scale
