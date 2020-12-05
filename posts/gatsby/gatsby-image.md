---
title: Gatsby blog image 넣기
date: 2020-12-05
tags: [gatsby]
---

> 블로그를 만들기는 했는데 이미지가 안나온다. 
> 해결을 해보자..


## Markdown 에서 이미지 사용하기

#### install

```shell
npm install gatsby-remark-images gatsby-plugin-sharp
```

#### setting

```js
// In your gatsby-config.js
plugins: [
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
      ],
    },
  },
]
```






## (Gatsby에서 Image 작업)[https://www.gatsbyjs.com/docs/working-with-images/]

GraphQL 쿼리를 사용하여 최적 크기 & 해상도 이미지를 가져온 뒤에 `gatsby-image` 컴포넌트로 처리하는 방식이다. 
이 블로그에는 위의 방식만 있으면 될 듯 싶어서 일단 링크만 정리 해두었다.


### gatsby-source-filesystem

(gatsby-source-filesystem)[https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=] 플러그인은 markdown 으로 page 를 만들 때도 사용하였던 플러그인이다. 해당 플러그인을 사용하면 파일에서 노드를 생성하여 gatsby 애플리케이션에서 읽어들일 수 있는 데이터로 변환할 수 있다.


#### install

```shell
npm install gatsby-source-filesystem
```

#### setting

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/posts/`,
      },
    },
  ],
}
```


### gatsby-transformer-sharp, gatsby-plugin-sharp

(`gatsby-source-filesystem`를 먼저 설치해야 한다.)

ImageSharp는 이미지에서 노드를 생성하고, 크기 조정, 크롭, 반응형 이미지 생성 등을 포함하는 이미지 처리를 위한 GraphQL 필드를 제공한다.

jpeg, jpg, png, webp, tif, tiff 확장자 파일들을 이미지로 인식한다. 
때문에 gif, svg 와 같은 파일을 사용하면 경고를 표시한다. `checkSupportedExtensions: false,` 옵션으로 경고를 비활성화 할 수도 있다.



gatsby-transformer-sharp, gatsby-plugin-sharp 

#### install

```shell
npm install gatsby-transformer-sharp gatsby-plugin-sharp
```

#### setting

```js
// gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // 경고 활성화/비활성화
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
  ],
}
```