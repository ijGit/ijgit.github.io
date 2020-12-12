---
title: "Gatsby 블로그: 카테고리 적용하기"
date: 2020-12-12
tags: [gatsby]
---


## 1. markdown 파일에 category 생성

markdown 파일 frontmatter에 아래와 같이 category를 추가해주었다.

```markdown
title: "Gatsby 블로그: 카테고리 적용하기"
date: 2020-12-12
category: "Develop"
tags: [gatsby]
```


## 2. 쿼리 작성


GraphQL 쿼리를 통해 카테고리별로 게시물을 그룹화하고 각 그룹의 게시물 수를 가져올 수 있다.
아래 쿼리는 카테고리 페이지를 위해 카테고리 이름과 카테고리에 해당하는 게시물 수를 가져오는 쿼리이다.
테스트는 http://localhost:8000/___graphql 에서 할 수 있다.

```js
  allMarkdownRemark {
    group(field: frontmatter___category) {
      totalCount
      fieldValue
    }
  }
```

## 3. category 템플릿 페이지 생성

카테고리 페이지는 `categories/{category}`로 생성되고 페이지에는 해당하는 게시물 목록을 나타내려고 한다. 

<br>

포스트 이름, 태그, 게시 날짜 등을 가져오는 쿼리를 작성해준다. 

```js
query ($eq: String) {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {category: {eq: $eq}}}) {
    totalCount
    edges {
      node {
        fields {slug}
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          tags
          title
        }
        excerpt
      }
    }
  }
}
```

- `line 1, line 3`: `line 1` 에서는 String eq를 입력으로 받는다. eq는 `line 3`에서 필터링 하는데에 사용한다.





-----
reference: https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/