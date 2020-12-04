---
title: "[Node.js] node 버전 관리: n 모듈"
date: 2010-10-13
tags:
  - Node.js
  - dev env
keywords: 
  - Node.js
  - node 버전 관리
draft: true
---

# n 모듈

- `n`	`Node.js` 버전을 관리해주는 플러그인
- 다양한 버전을 선택하여 설치 가능 (최신 버전, 안정 버전, LTS, 특정 버전)


# **install n**

```shell
# n모듈 설치
$ npm install -g n

# node 안정버전 설치
$ n stable

# 노드버전 확인
$ node -v
v11.10.0 

# lts버전 설치
$ n lts

# 특정버전 설치 ex> $ n <version> 
$ n 10.0.0

# 버전삭제 
$ n rm 10.0.0
```



# **npm upgrade**

```shell
//npm 버전 확인
$ npm -v
3.1.0

$ sudo npm install -g npm
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
+ npm@6.8.0
added 2 packages from 2 contributors, removed 2 packages and updated 7 packages in 20.345s

$npm -v
3.10.0
```