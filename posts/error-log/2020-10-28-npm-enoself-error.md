---
title: "[Node.js error] npm ERR! code ENOSELF"
date: 2020-10-28
tags:
    - Node.js
    - error
keywords:
    - Node.js npm install error
    - npm err! ENOSELF
---

## npm ERR! code ENOSELF

### 문제상황
패키지 설치를 위해 ``npm install``명령어를 사용하였을 때 아래와 같은 오류가 발생하였다.

```shell
npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "PACKAGE_NAME" under a package
npm ERR! also called "PACKAGE_NAME". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR!
```

### 원인
``npm install`` 을 통해 설치하려는 패키지와 내 프로젝트 디렉토리의 이름이 같아서 발생하는 오류이다.

### 해결 방법
1. 프로젝트 디렉토리의 이름을 변경한다.
2. package.json 의 프로젝트 이름을 변경한다.

