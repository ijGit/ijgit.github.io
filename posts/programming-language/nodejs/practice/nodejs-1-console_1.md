---
title: "[Node.js] console.log 변수/객체 출력"
date: 2020-12-07
tags: ['Node.js']
type: snippet
keywords: ['Node.js console.log', 'Node.js 변수 출력']
---


## console.log

`console.log([data][, ..args])`: `stdout` 개행으로 출력


## 변수 출력

### example 1)

###### code-1
```js
var intVar = 10;
var strVar = 'hello world';
var jsonVar = {name: 'isu jeong'};

console.log('integer variable: %d', intVar);
console.log('string variable: %s', strVar);
console.log('integer variable: %j', jsonVar);
```

###### output-1
```shell
integer variable: 10
string variable: hello world
integer variable: {"name":"isu jeong"}
```

### example 2)

###### code-2
```js
var intVar = 10;
var strVar = 'hello world';
var jsonVar = {name: 'isu jeong'};

console.log('integer variable: ', intVar);
console.log('string variable: ', strVar);
console.log('integer variable: ', jsonVar);
```

###### output-2
```shell
integer variable:  10
string variable:  hello world
integer variable:  { name: 'isu jeong' }
```

### example 3)

###### code-3

```js
var intVar = 10;
var strVar = 'hello world';
var jsonVar = {name: 'isu jeong'};

console.log(`integer variable: ${intVar}`);
console.log(`string variable: ${strVar}`);
console.log(`integer variable: ${jsonVar}`);
```

###### output-3
```shell
integer variable: 10
string variable: hello world
integer variable: [object Object]
```

## object 출력

**```console.dir(object)```**: javascript 객체의 속성들을 출력 

```js
console.dir(jsonVar);  // object
```

```shell
{ name: 'isu jeong' }
```

