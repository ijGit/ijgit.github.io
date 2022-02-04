---
title: "[Node.js] NVM을 이용하여 Node.js 설치"
date: 2021-10-13
type: tool
tags:
  - Ubuntu
keywords: 
  - ubuntu
  - kakao talk
  - ubuntu kakao talk
---

## NVM (Node Version Manager)

[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) 란 Node.js의 버전을 관리하는 도구이다. 
- 협업, 다양한 프로젝트를 동시에 진행해야 할 때
- 컴퓨터에 다양한 버전의 node.js를 설치할 때
등의 상황에 이점이 있으며, 커맨드로 간단하게 node 버전을 스위칭할 수 있다. 

나의 경우에는 리눅스에 node.js 를 설치하면 지나치게 하위 버전이 설치되는 문제가 계속 발생해 nvm 으로 node.js 를 설치하게 되었다. (편하다)


## NVM Install


```bash
// curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash 

// wget 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

```bash
// .bashrc 설정 리로드
source ~/.bashrc
```

```bash
nvm install node    # 최신버전 설치
nvm install --lts   # lts 설치
```


## 그 외 NVM command

```bash
# 설치된 node.js 목록 확인하기
$ nvm ls

# 설치할 수 있는 Node 버전 조회
$ nvm ls-remote

# 특정 버전의 node 사용하기
$ nvm use <version>

# 현재 사용중인 버전 확인하기
$ nvm current

# node.js 설치 경로 확인하기
$ which node

# 필요없는 node 버전 삭제하기
$ nvm uninstall <version>
```