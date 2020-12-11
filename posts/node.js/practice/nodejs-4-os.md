---
title: "[Node.js] os module"
date: 2020-12-07
tags: ['Node.js']
---

## os module

`os`: 시스템 정보를 알려주는 모듈


```js
const os = require('os');

// 시스템 hostname
console.log('hostname: %s', os.hostname());

// 시스템 메모리
console.log('system memory: %d/%d', os.freemem(), os.totalmem());

// 시스템 CPU 정보
console.log('system cpu info: %j', os.cpus());

// 시스템 네트워크 인터페이스 정보
console.log('system interface info: %j', os.networkInterfaces());
```