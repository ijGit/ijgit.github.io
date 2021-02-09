---
title: "[CSS] text 말줄임 효과"
date: 2020-12-20
tags: [web, CSS, snippet]
type: snippet
---


`webkit`엔진 또는 `height`, `line-height`설정을 통해 말줄임 설정이 가능하다.


```css
.container{
  height: 2.6;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  
  .text-box{
    line-height: 1.3;
  }
}
```
- 2줄 이상 말 줄이는 코드
- `line 2`: 2.6 = line-height x 2
