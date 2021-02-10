---
title: "[devenv python] ubuntu python 기본 실행버전 변경"
date: 2020-10-29
type: tool
tags:
  - dev env
keywords:
  - python version change
  - ubuntu python 실행 버전
---

우분투에서 python 을 실행하면 기본 실행 버전이 python2.x로 설정되어 있는 것을 확인할 수 있다.


파이썬을 실행하는 방법은 아래와 같다.

```bash
# 시스템 설정 버전으로 실행
$ python filename.py

# python 2.x 로 실행
$ python2 filename.py

# python 3.x 로 실행
$ python3 filename.py
```


# python 버전 변경

python 기본 버전을 변경하기 위해서는 아래 명령어를 입력하면 된다.

```bash
$ sudo update-alternatives --config python
```

<br>


만약 ``update-alternatives: error: no alternatives for python`` 와 같은 오류가 발생한다면 아래 명령어를 입력하면 된다.
참고로 python2.x 와 python3.x 는 자신의 ubuntu 에 설치되어 있는 python 버전으로 변경해야 한다.

```bash
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.x 1
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.x 2
```

<br>

python 버전은 다음과 같이 확인할 수 있다.

```
$ python2 --version
Python 2.7.18
$ python3 --version
Python 3.8.5
```

<br>

버전을 확인하였을 때, python2 버전은 2.7로 python3 버전은 3.8로 확인되었으므로 아래와 같이 입력하였다.

```bash
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1 
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.8 2
```

<br>

위의 명령어를 실행하였다면 ``sudo update-alternatives --config python`` 명령어를 다시 입력하여 변경할 python 버전을 선택하면 된다.

```bash

$ sudo update-alternatives --config python
There are 2 choices for the alternative python (providing /usr/bin/python).

  Selection    Path                Priority   Status
------------------------------------------------------------
* 0            /usr/bin/python3.8   2         auto mode
  1            /usr/bin/python2.7   1         manual mode
  2            /usr/bin/python3.8   2         manual mode

Press <enter> to keep the current choice[*], or type selection number: 2

```