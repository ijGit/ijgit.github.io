---
title: '[JavaScript, Node.js] JSON 데이터 필터링하기'
date: 2020-12-15
tags: [node.js, JS, snippet]
type: snippet
---


## code

```js
var json= [
  {
    "id": "1",
    "avaiable": true,
  },
  {
    "id": "2",
    "avaiable": false,
  },
  {
    "id": "3",
    "avaiable": false,
  }
];

var result = json.filter(value => value.avaiable === true);
console.log(result);

/*
[ { id: '1', avaiable: true } ]
*/
```

#### 블로그 구현에 사용했던 코드

```js
  const posts = edges.filter(({node}) => {
    const tags = node.frontmatter.tags.map(tag =>{return tag.toLowerCase();});
    if(tags.includes(tag)){
      return(node)
    }
  });
```