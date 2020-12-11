---
title: "[Node.js] path module"
date: 2020-12-07
tags: ['Node.js']
---


## path module


- `join()`
  - 여러 개의 이름들을 모두 합쳐 하나의 파일 경로로 생성<br> 파일 경로를 완성할 때 구분자 등은 알아서 조정함
- `dirname()`: 파일 경로에서 디렉토리 이름을 반환
- `basename()`: 파일 경로에서 파일의 확장자를 제외한 이름을 반환
- `extname()`: 파일 경로에서 파일의 확장자를 반환


##### code

```js
var path = require('path');

var dirs = ['pages', 'posts', '2020-12-07']
var dirPath = dirs.join(path.sep);
console.log('document dir: %s', dirPath);

var filePath = path.join(dirPath, 'notepad.exe');
console.log('file path: %s', filePath);


var filename = filePath;
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('directory name: %s', dirname);
console.log('file name: %s', basename);
console.log('extension name: %s', extname);
```

##### output

```shell
document dir: pages\posts\2020-12-07
file path: pages\posts\2020-12-07\notepad.exe
directory name: pages\posts\2020-12-07
file name: notepad.exe
extension name: .exe
```