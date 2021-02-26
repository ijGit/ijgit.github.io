---
title: '[Node.js] event'
date: 2020-12-08
tags: ['Node.js', snippet]
type: snippet
---

## event

- EventEmitter 를 사용
- `on`으로 리스너를 등록하고 `emit`으로 이벤트를 전송한다.

- `on(event, listener)`: 지정한 이벤트의 리스너를 추가 
- `once(event, listener)`: 지정한 이벤트의 리스너를 추가
  - 한 번 실행 한 후에 자동으로 리스너가 제거된다.
- `removeListener(event, listener)`: 지정한 이벤트에 대한 리스너를 제거
- `emit(event, param)`: 이벤트를 전송


### example

###### code-1

```js
process.on('tick', function(param){
  console.log('tick event: %s', param);
});

setTimeout(function(){
  process.emit('tick', '2');  // 2초 후에 tick 이벤트 전달
}, 2000);
```

###### output-1
```shell
tick event: 2
```


###### code-2

```js
// calc.js
const util = require('util');
const eventEmitter = require('events').EventEmitter;

const Calc = function(){

  // stop evnet가 발생하였을 때 실행 
  this.on('stop', function(){
    console.log('calc: stop event');
  });
}

util.inherits(Calc, eventEmitter);
Calc.prototype.add = function(a, b){
  return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';
```

```js
// main.js
const Calc = require('./calc');

const calc = new Calc();
calc.emit('stop');  // Calc 에 stop event 전달함
console.log(Calc.title, 'stop event') 
```

###### output-2
```shell
calc: stop event
calculator stop event
```