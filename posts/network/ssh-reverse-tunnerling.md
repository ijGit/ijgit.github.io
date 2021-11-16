---
title: "SSH: 리버스 터널링"
date: 2021-11-16
tags: ["network", "dev env"]
type: tool
---


# SSH - 리버스 터널링

외부에서 접속이 불가능한 PC 로 원격 접속을 하려고 하면, reverse tunnerling 이 필요하다. 

`ssh -R ` 옵션을 통해 실행할 수 있는데, 





즉 reverse tunnerling을 통해 외부에서 접속이 불가능한 PC `A`와, 외부에 있는 PC    `B`가 있을 때, B가 A로 접속을 할 수 있다.

`A`: 외부에서 접속이 불가능한 PC

`B`: 외부에 있는 PC 

보통 SSH 연결은 A → B 로 이루어질 수 있으나, 이 반대로 접속을 해야 할 때가 있다. 이 경우 ssh -R 옵션을 통해 해결할 수 있다.  



reverse tunnerling 절차는 다음과 같다.

**1. `A` 에서 ssh 를 통해 `B` 로 reverse tunnel 를 열어준다.**

```bash
user_A$ ssh -R ${B의 터널링 포트}:localhost:${A의 터널링 포트} ${B의 계정}@${B의 도메인, 또는 ip} -p${B의 ssh 포트}
```

- B의 터널링 포트: B에 열릴 포트, 
- A의 터널링 포트: B와 연결 될 A의 포트





예를 들어 아래와 같이 명령어를 입력하면, `A` 에서 111.111.11.1 의 PC 에 port 22로 ssh 접속을 시도한다. 접속이 성공한다면, 111.111.11.1 의 PC  에서 port 1234로 접속을 할 때, `A` 의 port 22로 접속을 할 수 있다. 

```bash
user_A$ ssh -R 1234:localhost:22 test@111.111.11.1 -p:22
```



   

**2. 위의 과정을 거치면 `B`에서 `B` 의 터널링 포트로 접속했을 때, `A` 의 터널링 포트로 연결된다.**

```
user_B$ ssh localhost -p ${B의 터널링 포트}
```



