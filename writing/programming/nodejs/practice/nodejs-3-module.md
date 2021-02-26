---
title: '[Node.js] module 불러오기'
date: 2020-12-07
tags: ['Node.js', snippet]
type: snippet
---


## main file: module 불러오기

```js
const calc = require('./calc);

console.log(calc.add(10, 10));
console.log(calc.sub(10, 10));
```




## module

##### main file

```js
const calc = require('./calc-1');

console.log(calc.add(10, 10));
console.log(calc.sub(10, 10));
```

##### output
```shell
> 20
> 0
```



##### ex-1

```js
// calc.js
exports.add = function(a, b){
  return a+b;
}

exports.sub = function(a, b){
  return a-b;
}
```

##### ex-2
```js
// calc.js
var calc = {};

calc.add = function(a, b){
  return a+b;
};

calc.sub = function(a, b){
  return a-b;
};

module.exports = calc;
```
