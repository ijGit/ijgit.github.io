---
title: '[Node.js] console.dir - 실행한 파일 이름과 객체 정보 출력'
date: 2020-12-07
tags: ['Node.js']
---

###### code

```js
console.log('current file name: %s', __filename);
console.log('current file path: %s', __dirname);

var obj = {name: 'isu jeong', title: 'ij.log'}
console.dir(obj);
```

###### output

```shell
current file name: c:\Users\I.Jeong\code\3-console-dir.js
current file path: c:\Users\I.Jeong\code
{ name: 'isu jeong', title: 'ij.log' }
```