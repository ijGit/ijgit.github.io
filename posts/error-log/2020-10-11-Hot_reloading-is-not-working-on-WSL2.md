---
title: "[WSL error] Hot Reloading is not workign on WSL"
date: 2020-10-10
tags:
  - WSL
  - error
keywords:
  - WSL
  - Hot Reloading
  - Hot Reloading Error
  - HMR not working
  - HMR Error
---



## **문제 상황**

WSL2 환경에서 hot-reloading 이 안되는 오류가 발생하였다. 코드를 수정하면 그에 따라 웹이 바로 변경되어야 하는데 새로고침을 해도 안되고, 서버를 껏다가 다시 실행 시켜야 변경사항이 반영이 되어있다.

## **해결 방법**

요약하자면, windows 파일 경로가 아니라, Linux 파일 경로에서 프로젝트를 생성하고 작업하면 된다.

- 설명
  - `C:\\Users\\USERNAME\\WORKSPACE\\..` 와 같은 윈도우 파일 경로가 아니라, `/home/USERNAME/..`와 같은 Linux 파일 경로 내에서 작업을 해야 한다.
  - Windows Terminal 에서 설치한 리눅스 커널을 키거나, vs code 에서 WSL SSH 접속 확장 프로그램을 설치하면 Linux 파일 경로에서 작업을 할 수 있다. 
  - 실행할 때의 속도도 훨씬 빨라지고 Hot-reloading 기능도 동작한다.

## **삽질 로그**

나중에 쓰일수도 있으니 해결하기 위해 한 것들을 정리해두었다. 해당 오류를 해결하는데 도움을 주지는 않았다.

- `console`에 404 페이지가 없다는 오류가 있길래 혹시나 하고 404.md를 생성하였다.

- 파일 변경 감지 수를 늘려보았다.

  ```
  sysctl -w fs.inotify.max_user_watches=524288
  ```

- 크롬의 문제라는 말이 있어서 파이어폭스를 설치했다.



------

reference: https://github.com/microsoft/WSL/issues/4417