---
title: "[Node.js] console.process: 프로세스 정보를 다루는 객체"
date: 2020-12-07
tags: ['Node.js']
---


### example 1

```js
// argv: 프로세스를 실행할 때 전달되는 파라미터 정보
console.log('argv parameter number: ', process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index){
  console.log(index, ':', item);
});

> node example.js 123 123 123 
> 0 : C:\install_program\Nodejs\node.exe
> 1 : C:\Users\I.Jeong\code\example.js
> 2 : 123
> 3 : 123
> 4 : 123
```



### example 2

```js
// argv: 프로세스를 실행할 때 전달되는 파라미터 정보
console.log('argv parameter number: ', process.argv.length);
console.dir(process.argv);

process.argv.forEach(element => {
  console.log(element);
});


> node example.js 123 123 123 
> C:\install_program\Nodejs\node.exe  
> C:\Users\I.Jeong\code\example.js
> 123
> 123
> 123
```