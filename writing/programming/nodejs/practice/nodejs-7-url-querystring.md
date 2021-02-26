---
title: '[Node.js] 주소 파싱 - URL/querystring module'
date: 2020-12-08
tags: ['Node.js', snippet]
type: snippet
---

## URL module

- `parse()`: 주소 문자열을 파싱하여 URL 객체를 생성
- `format()`: URL 객체를 주소 문자열로 변환


##### code
```js
const url = require('url');
var curUrl = url.parse('https://www.google.com/search?q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8');
var curStr = url.format(curUrl);

console.log('address string: %s', curStr);
console.dir(curUrl);
```

##### output
```shell
address string: https://www.google.com/search?q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8',
  query: 'q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8',
  pathname: '/search',
  path: '/search?q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8',
  href: 'https://www.google.com/search?q=node.js&rlz=1C1CHZN_koKR921KR921&oq=node.js&aqs=chrome.0.69i59l3j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8'
}
```


## querystring module

- & 기호로 구분되는 요청 파라미터를 분리하는 데 사용

- `parse()`: 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체를 만들어 준다.
- `stringfy()`: 요청 파라미터 객체를 문자열로 반환 


```js
const url = require('url');
const querystring = require('querystring');

var _url = 'https://www.google.com/search?query=node';
// 'https://www.google.com/search?q=node'; 로 하면 
// request parameter-query: undefined
// request param: q=node 
// 와 같이 출력된다.


var curUrl = url.parse(_url);

var param = querystring.parse(curUrl.query);
console.log('request parameter-query: %s', param.query);
console.log('request param: %s', querystring.stringify(param));
```

```shell
request parameter-query: node
request param: query=node
```