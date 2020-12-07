---
title: "[Git Error] Remote origin already exists"
date: 2020-10-13
draft: true
# update: 2020-03-08
tags:
  - Git
  - error
keywords:
  - git error
  - 깃 에러
  - Remote origin already exists
---


## 문제 상황


* ``git remote add origin <url>`` 명령어 실행시 아래와 같은 오류 발생 

```bash
$ git remote add origin https://github.com/..
fatal: remote origin already exists.
```



## 해결 방법 

``git remote add`` 대신 ``git remote set`` 명령어를 실행

```bash
$ git remote set-url origin https://github.com/..
```



## 원인

* 저장소를 복제 ``clone`` 한 후에 자신의 원격 서버를 추가하려고 할 때 해당 오류가 발생
    * 저장소를 복제했을 때 Remote ``origin`` 이 같이 복사됨
* ``origin``이 일반적인 규칙이므로 이미 ``origin``이라는 이름으로 구성된 원격이 있을 가능성이 높음





## summary

* repository를 clone 하면 다른 사람이 추가한 원격 서버 또한 같이 복사됨
    * 일반적으로 ``origin``을 포함하고 있을 가능성이 높음
* ``git remote add`` 대신 ``git remote set-url``을 사용