---
title: "Gatsby에 LaTeX 적용하기: gatsby-remark-katex"
date: 2020-12-11
tags: [Gatsby]
---


#### 1. install

```shell
npm install gatsby-transformer-remark gatsby-remark-katex katex
```

### 2. setting

```js
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // https://github.com/KaTeX/KaTeX/blob/master/docs/options.md 
            // 위의 링크에서 KaTeX 옵션을 여기에 추가
            strict: `ignore`
          }
        }
      ],
    },
  },
],
```
### 3. 템플릿에 Katex CSS 추가

수식을 올바르게 렌더링하려면 Katex의 CSS 파일이 필요하다.
블로그 포스트 템플릿에 아래와 같이 CSS 파일을 포함시킨다.

```
import "katex/dist/katex.min.css"
```


### 4. 사용법

`$` 하나로 수식을 감싸면 inline 수식으로 작성이 되고 두개 (`$$`)로 감싸면 새로운 줄에 수식이 표현된다.


###### example

```markdown
// inline
$a^2 + b^2 = c^2$
```

```markdown
//  new-lines
$$
a^2 + b^2 = c^2
$$
```

<br>

자세한 문법은 아래에서 참조할 수 있다.
- [TeX 문법 참고](https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:TeX_%EB%AC%B8%EB%B2%95)

<br>

-----
reference: https://www.gatsbyjs.com/plugins/gatsby-remark-katex/