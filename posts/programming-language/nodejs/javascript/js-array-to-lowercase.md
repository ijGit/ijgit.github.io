---
title: '[JavaScript, Node.js] 모든 배열 값에 LowerCase/UppserCase 적용'
date: 2020-12-15
tags: [node.js, JS, snippet]
---

## code

```js
var words = ['Foo','Bar','Fizz','Buzz'].map(v => v.toLowerCase());
console.log(words);
```

```js
var words = ['Foo','Bar','Fizz','Buzz'].map(v => v.toUpperCase());
console.log(words);
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



-----
reference
- https://morioh.com/p/0b5bd0ececd4