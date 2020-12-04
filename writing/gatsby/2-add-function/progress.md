


# Progressive Web App

## Https
## [Web App Manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)

- 자동 아이콘 생성-단일 소스에서 여러 아이콘 크기 생성
- Favicon 지원
- 레거시 아이콘 지원 (iOS) 1
- 캐시 무효화
- 경로 기반 localization을 위한 고유한 manifest 지원
  - Localization - Provides unique manifests for path-based localization (Gatsby Example)

Install
``` shell
$ npm install -S gatsby-plugin-manifest
```

Add plugin and setting
```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
```

## (gatsby-plugin-offline)[https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/]

Install
``` shell
$ npm install -S gatsby-plugin-offline
```

Add plugin and setting
```js
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-plugin-offline`]
```


# (캐시)[https://www.gatsbyjs.com/docs/caching/]

## gatsby-plugin-netlify (아직 설치 안함)