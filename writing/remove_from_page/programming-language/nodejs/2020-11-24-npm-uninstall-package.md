---
title: "Node.js: npm uninstall package"
date: 2020-11-24
type: develop
tags: 
  - Node.js
draft: true
---

```shell

# uninstll in node_modules folder
$ npm uninstall <package-name>


# uninstll in package.json
$ npm uninstall -S <package-name>
$ npm uninstall -save <package-name>


# 개발 의존성 모듈 제거 
# (-D or --save-dev 옵션으로 설치한 모듈 제거)
# uninstall devDependencies module 
$ npm uninstall -D <package-name>
$ npm uninstall --save-dev <package-name>


# 전역적으로 설치된 패키지 제거
# uninstall globally installed package
$ npm uninstall -g <package-name>
```