---
title: "[Node.js error] npm install error"
date: 2020-10-10
tags:
  - Node.js
  - error
keywords:
  - node.js error
  - npm install error
---



## npm install error



* 패키지 설치 중에 아래와 같은 오류가 발생

```

> npm init
> npm install nconf
npm WARN node@1.0.0 No description
npm WARN node@1.0.0 No repository field.

npm ERR! code ENOENT
npm ERR! syscall rename
npm ERR! path C:\Users\workspace\node_modules\camelcase
npm ERR! dest 
C:\Users\workspace\node_modules\.camelcase.DELETE
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, rename 'C:\Users\workspace\node_modules\camelcase' -> 
'C:\Users\workspace\node_modules\.camelcase.DELETE'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2020-10-02T09_52_02_443Z-debug.log
```





## answers

* answer 1
  * Delete ```package-lock.json``` and run ```npm``` again
  * Ensure no other processes of node.js are running (check task manager)
  * If you are using visual studio code, close it and try running `npm install` again.
  * If all else fails, restart your computer.

* answer 2
  * delete package-lock.josn and node_modules
  * clear npm cache by `npm cache clear --force`
  * restart VS Code
  * running `npm install`again

* **answer 3** (해결)
  * For me the reason was **Dropbox** (my NodeJS project being somewhere deep in the **Dropbox folder**). I suspended the synchronisation, tried `npm install` again and it installed without error. Then of course I resumed the synchronisation.
  * 동기화 일지 중지 후에 패키지 설치 