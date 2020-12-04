
ref: https://www.gatsbyjs.com/docs/add-page-metadata/

# MetaData

페이지에 메타 데이터 (예 : 제목 또는 설명)를 추가하는 것은 Google과 같은 검색 엔진이 콘텐츠를 이해하고 검색 결과에 표시 할시기를 결정하는 데 핵심적인 역할을합니다.


- gatsby-plugin-react-helmet
  header를 관리 할 수있는 React 컴포넌트 인터페이스를 제공하는 패키지입니다 .

- react-helmet
  : React Helmet에 추가 된 서버 렌더링 데이터에 대한 드롭 인 지원을 제공합니다. 플러그인을 사용하면 React Helmet에 추가 한 속성이 Gatsby가 빌드하는 정적 HTML 페이지에 추가됩니다.



## Install / Setting

Install

```shell
npm install gatsby-plugin-react-helmet react-helmet
```

Setting

```js
// gatsby-config.js
{
  plugins: [`gatsby-plugin-react-helmet`]
}
```


# SEO

Setting

```js
// gatsby-config.js
import config from './_config';
const { title, description, author, siteUrl, language } = config;


export const pathPrefix = '/gitpage-dev';
export const siteMetadata = { title, description, author, siteUrl, language };
export const plugins = []
```