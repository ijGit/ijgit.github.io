---
title: '[Node.js] callback function'
date: 2020-12-07
tags: ['Node.js']
---

### 파라미터로 함수 전달

- 함수도 객체의 일종으로 변수에 함수를 할당할 수 있다.
- 함수를 호출할 때 파라미터로 다른 함수를 전달하는 것이 가능하다.

```js
function add(a, b, callback){
  var result = a+b;
  callback(result);
}

add(10, 10, function(result){
  console.log('run callback function');
  console.log(`10+10=${result}`);
})
```


### 함수를 리턴


함수에서 결과를 반환할 때 함수를 반환할 수 있다.

```js
// 함수에서 반환하는 값이 함수

function add(a, b, callback){
  var result = a+b;
  callback(result);

  var history = function(){
    return `${a} + ${b} = ${result}`;
  }
  return history;
}

var add_history = add(10, 10, function(result){
  console.log('call callback function');
  console.log(`result: ${result}`);
});

console.log('return function result: ', add_history());
```

```shell
result: 20
return function result:  10 + 10 = 20
```


#### 반환된 함수에서 함수 내부의 변수 접근

```js
// 반환된 함수에서 함수 내부의 변수 접근

function add(a, b, callback){
  var result = a+b;
  callback(result);
  
  var count = 0;
  var history = function(){
    count++;
    return `${count}: ${a} + ${b} = ${result}`;
  }
  return history;
}

var add_history = add(10, 10, function(result){
  console.log('call callback function');
  console.log(`result: ${result}`);
});

console.log('return function result: ', add_history());
console.log('return function result: ', add_history());
console.log('return function result: ', add_history());
```


```shell
call callback function
result: 20
return function result:  1: 10 + 10 = 20
return function result:  2: 10 + 10 = 20
return function result:  3: 10 + 10 = 20
```