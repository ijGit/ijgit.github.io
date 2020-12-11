---
title: "[Gatsby error] Gatsby install sass plugin error"
date: 2020-12-02
tags: [gatsby, error]
---


Gatsby 버전과 sass 버전이 충돌이 일어나서 발생하는 오류

```shell
Node Sass version 5.0.0 is incompatible with ^4.0.0.
```

<br>

아래 명령어로 기존 패키지를 삭제하고 하위 버전으로 다시 설치하면 된다.

```shell
npm uninstall node-sass
npm install node-sass@4.14.1
```

-----
reference
- https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0