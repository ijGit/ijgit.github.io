---
title: "Gatsby로 Gitpage 블로그 만들기 3: 데이터 다루기"
description: "Tag, Category 기능 추가하기, 페이지 리스트 기능 추가하기"
date: 2020-11-25
---


# Tag, Category 기능


> 현재 슬러그는 파일명을 기반으로 하고 있고, 태그나 카테고리 기능은 존재하지 않는다.
> 코드를 수정하여 해당 기능을 제공할 수 있도록 해보자


## frontmatter 수정

기존의 title과 date만 있던 frontmatter 에 categories tags 추가해주자

```markdown
---
title: "first post"
date: 2020-11-25
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---
```

아래 쿼리를 실행하면 categories와 tags값이 출력되는 것을 확인할 수 있다. 
데이터를 가져오는 것은 http://localhost:8001/___graphql에서 테스트해볼 수 있다.

```js
{
  allMarkdownRemark(limit: 1000) {
    edges {
      node {
        frontmatter {
          title
          categories
        }
        fields {
          slug
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "first post",
              "categories": [
                "category1",
                "category2",
                "category3"
              ],
              "tags": [
                "tag1",
                "tag2",
                "tag3"
              ]
            },
            "fields": {
              "slug": "/test/test-1/2020-11-24-first-post/"
            }
          }
        },
      ]
    }
  },
}
```


