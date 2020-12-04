설치


PrismJS를 사용하여 마크 다운 파일의 코드 블록에 구문 강조 표시를 추가합니다 .

### install

```shell
$ npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

### setting

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
            showLineNumbers: true,
          },
        },
      ],
    },
  },
]
```


- **classPrefix**: Class prefix for <pre> tags containing syntax highlighting. defaults to 'language-' (e.g. <pre class="language-js">).
- **inlineCodeMarker**: This is used to allow setting a language for inline code. (i.e. single backticks) by creating a separator.
공백없는 문자열이고, non-ascii 이어야 한다.
- **aliases**: language 매핑
- showLineNumbers: 라인 넘버를 보여주지 않음,
- **noInlineHighlight**: true로 설정하면 인라인 코드 하이라이트를 하지 않음 
- **languageExtensions**: language 하이라이트 확장