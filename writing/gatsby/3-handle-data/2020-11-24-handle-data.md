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





```
{
  id: '10e7cf6a-cc61-5e83-a067-bf68218ef198',
  children: [],
  parent: 'f014dce8-b574-5cce-bba3-95eff41ea061',
  internal: {
    content: '\nthird post',
    type: 'MarkdownRemark',
    contentDigest: '51c778ab64cbec60ca5a8e9a81a2cac4',
    counter: 30,
    owner: 'gatsby-transformer-remark'
  },
  frontmatter: {
    title: 'third-post',
    date: '2020-11-25T00:00:00.000Z',
    tags: [ 'tag3' ],
    categories: [ 'category3' ]
  },
  excerpt: '',
  rawMarkdownBody: '\nthird post',
  fileAbsolutePath: '/home/ijeong/workspace/gitpage-dev/content/posts/test/2020-11-25-third-post.md'
}



[Function: getNode]
{
  id: '60614e1b-3c3d-55f4-88fe-df4100c8bcab',
  children: [],
  parent: '24a09f31-3fc4-5cc5-90b5-7e538c1228d7',
  internal: {
    content: '\nsecond post',
    type: 'MarkdownRemark',
    contentDigest: 'dda944d546afd6a4d37dde469f09be27',
    counter: 31,
    owner: 'gatsby-transformer-remark'
  },
  frontmatter: {
    title: 'second-post',
    date: '2020-11-25T00:00:00.000Z',
    tags: [ 'tag2' ],
    categories: [ 'category1', 'category2' ]
  },
  excerpt: '',
  rawMarkdownBody: '\nsecond post',
  fileAbsolutePath: '/home/ijeong/workspace/gitpage-dev/content/posts/test/2020-11-25-second-post.md'
}
[Function: getNode]
{
  id: '22ee6a70-e5f2-57b7-9055-04a226edd2d0',
  children: [],
  parent: 'e74e2f39-f8e8-5c53-8c14-7841073816bf',
  internal: {
    content: '\n' +
      '# first post\n' +
      '\n' +
      '## header 2\n' +
      '\n' +
      '### header 3\n' +
      '\n' +
      '\n' +
      '### header 4\n' +
      '\n' +
      '- list 1\n' +
      '  - list 2\n' +
      '    - list 3\n' +
      '\n' +
      '쓸 말이 참 없다.\n' +
      '\n' +
      '\n' +
      '> blockQuote\n' +
      '> 인용문 테스트 중이다\n' +
      '\n' +
      '```c\n' +
      '\n' +
      '#include <stdio.h>\n' +
      '\n' +
      'int main(){\n' +
      '    printf("hello world");\n' +
      '}\n' +
      '```',
    type: 'MarkdownRemark',
    contentDigest: 'd90b9b4ec006ba1e2acc4ae9301c8a3c',
    counter: 32,
    owner: 'gatsby-transformer-remark'
  },
  frontmatter: {
    title: 'first post',
    date: '2020-11-24T00:00:00.000Z',
    tags: [ 'tag1', 'tag2', 'tag3' ],
    categories: [ 'category1', 'category2', 'category3' ]
  },
  excerpt: '',
  rawMarkdownBody: '\n' +
    '# first post\n' +
    '\n' +
    '## header 2\n' +
    '\n' +
    '### header 3\n' +
    '\n' +
    '\n' +
    '### header 4\n' +
    '\n' +
    '- list 1\n' +
    '  - list 2\n' +
    '    - list 3\n' +
    '\n' +
    '쓸 말이 참 없다.\n' +
    '\n' +
    '\n' +
    '> blockQuote\n' +
    '> 인용문 테스트 중이다\n' +
    '\n' +
    '```c\n' +
    '\n' +
    '#include <stdio.h>\n' +
    '\n' +
    'int main(){\n' +
    '    printf("hello world");\n' +
    '}\n' +
    '```',
  fileAbsolutePath: '/home/ijeong/workspace/gitpage-dev/content/posts/test/test-1/2020-11-24-first-post.md'
}
[Function: getNode]

```