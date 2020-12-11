---
title: "Gatsby 블로그 포스트에 TOC (목차) 적용하기"
date: 2020-12-11
tags: [gatsby]
---


## plugin 설치 및 세팅


#### 1. install

[`gatsby-transformer-remark`](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) 과 [`gatsby-remark-autolink-headers`](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/)를 아래 명령어로 설치해준다.

`gatsby-remark-autolink-headers` 플러그인은 `gatsby-transformer-remark` 의 하위 플러그인으로 markdown 파일이 렌더링 될 때 링크를 추가해준다.

```shell
$ npm install gatsby-transformer-remark gatsby-remark-autolink-headers
```


#### 2. setting

`gatsby-config.js` 파일에 아래 내용을 추가한다.

>  주의할 점: `gatsby-remark-prismjs`을 사용하는 경우, `gatsby-remark-autolink-headers` 뒤에 `gatsby-remark-prismjs` 를 작성해야 한다


```js{numberLines: 11, 12}
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      tableOfContents: {
        maxDepth: 3,
      },
    },
    plugins: [
      `gatsby-remark-autolink-headers`,
      `gatsby-remark-prismjs`,  // should be placed after `gatsby-remark-autolink-headers`
    ],
  },
]
```
위와 같이 설정을 하면 h3 까지 TOC 을 생성한다.
> 쿼리에서 조정을 할 수도 있다.


#### [gatsby-remark-autolink-headers](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/)





## 쿼리 작성

기존에 사용하던 포스트 템플릿 (`src/templates/post.js`)의 쿼리를 아래로 바꿔주었다.
목록생성 범위는 아래와 같이 maxDepth 설정을 하지 않아도 쿼리로 조절이 가능하다.

```js{numberLines: 13}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
      fields{
        slug
      }
      tableOfContents(absolute: true, maxDepth: 3)
    }
  }
`
```


테스트 겸 `console.log()` 로 쿼리 결과를 출력해보니 아래와 같은 결과가 나왔다. 

```html
<ul>
  <li><a href="/pages/dp_1/#1-%EB%8F%99%EC%A0%81-%EA%B3%84%ED%9A%8D%EB%B2%95-dp-dynamic-programming">1. 동적 계획법 (DP, Dynamic Programming)</a></li>
  <li><p><a href="/pages/dp_1/#2-dynamic-programming-%EC%A0%81%EC%9A%A9">2. Dynamic Programming 적용</a></p>
  <ul>
    <li><a href="/pages/dp_1/#21-dp-problem-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98%EC%97%B4">2.1. DP Problem: 피보나치 수열</a></li>
  </ul>
  </li>
  <li>
  <p><a href="/pages/dp_1/#3-memoization-vs-dynamic-programming">3. Memoization vs Dynamic Programming</a></p>
  <ul>
    <li><a href="/pages/dp_1/#memoization">Memoization</a></li>
    <li><a href="/pages/dp_1/#dynamic-programming">Dynamic Programming</a></li>
  </ul>
  </li>
</ul>
```


### 템플릿에 코드 추가


아래와 같이 쿼리된 html을 post 템플릿에 추가할 수 있다.

```html
<div dangerouslySetInnerHTML={{__html:tableOfContents}}/>
```

<br>

`import`, `style` 과 같은 부분을 제외한 전체 코드는 아래와 같다. 
line 6 에서 데이터를 가져온 뒤, line 23 에서 출력만 해주는 단순한 코드지만, TOC 기능은 제대로 한다. 


```js{numberLines: 6, 23}
// src/templates/posts.js

export default function PostTemplate({ data }) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents} = markdownRemark;
  return (
    <Layout>
      <section>
        <article>
          <div className="blog-post-container">
            <div className="blog-post">
              <MetaWrapper>
                <h1>{frontmatter.title}</h1>
                <div className="date">{frontmatter.date}</div>
                <div className="tags">
                  {frontmatter.tags.forEach(tag => {
                    return (<span>{tag}</span>)
                  })}
                </div>
              </MetaWrapper>
              
              <div dangerouslySetInnerHTML={{__html:tableOfContents}}/>
              <PostContentWrapper
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </article>
        <div>

          <Comment></Comment>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
      fields{
        slug
      }
      tableOfContents(absolute: true, maxDepth: 3)
    }
  }
`
```