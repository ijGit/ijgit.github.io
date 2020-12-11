---
title: "[Node.js] console 실행시간 체크"
date: 2020-12-07
tags: ['Node.js']
keywords: ['코드 실행시간 체크', 'Node.js console.time', 'Node.js 실행시간 체크']
---


## console.time

- `console.time([label])`: 실행시간을 계산하는 데 사용할 수 있는 타이머를 시작 
- `console.timeEnd([label])`: 이전에 호출한 `console.time()` 으로 실행된 타이머를 중지하고 결과를 `stdout`으로 출력
- `console.timeLog([label][, ...data])`: 이전에 호출한 `console.time()`의 경과 시간 및 `data` 인수를 출력한다.

타이머는 고유한 `label` (기본값: `default`) 를 사용한다. 같은 `label`을 사용하여 `console.timeEnd()`를 호출하면 타이머를 멈추고 시간을 출력한다. 


## 코드 실행시간 체크

###### code

```js
var result = 0;

console.time('time-log');

console.time('Node.js console.time');
for(var i=0; i<1000; i++){

  if(i%100 == 0){
    console.timeLog('time-log', `\t\ti=${i}`);
  }
  result += i;
}

console.timeEnd('time-log');
console.log(`1-1000 duration sum result: ${result}`);
```

###### result

```shell
time-log: 0.231ms
1-1000 duration sum result: 499500
```