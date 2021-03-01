---
title: "WSL 2 (Windows Subsystem for Linux 2) Install"
date: 2020-10-09
type: tool
tags:
  - WSL
  - dev env
keywords: 
  - WSL2 설치
  - WSL 설치
  - WSL install
  - WSL2 install
  - windows linux
  - 윈도우즈 리눅스
---

**들어가기 전에**

1. Windows 10을 업데이트하고 진행하는 것을 추천합니다.
    - WSL 2는 Windows 10, 버전 1903, 빌드 18362 이상에서만 사용할 수 있습니다.
    - `cmd` 창에 `ver` 을 입력하여 Windows 버전을 확인하세요.
2. 윈도우 터미널을 설치하는 것을 추천드립니다.
    - 개발할 때는 vs code 의 터미널을 더 사용하기는 하지만 기존에 설치된 powershell 이나 cmd 보다 훨씬 편합니다.

# What is WSL?

  WSL 은 Windows 10 에서 경량 가상화 기술을 사용하여 리눅스 커널을 구동할 수 있도록 해주는 기능이다. WSL 기능을 사용하면 Windows 10 OS 에서 Bash 및 Ubuntu Linux 파일을 실행 가능하다.

  WSL은 WSL1 에서 WSL2 로 업데이트 되면서 파일 IO 성능 향상, 메모리 사용량을 줄이는 등 많은 성능 개선을 이루었다. 특히 전체 시스템 호출 호환성을 갖추게 되면서 Docker 을 실행할 수 있게 되었다.


  # 설치 방법

  ## 1. Linux 용 Windows 하위 시스템 활성화 / 가상 머신 기능 활성화

  powershell을 관리자 권한으로 실행한 뒤에 아래 명령어를 실행

  ```
     # Linux 용 Windows 하위 시스템 활성화
     dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

     # 가상 머신 기능 활성화
     dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  ```

  - DISM (Deployment Image Servicing and Management)
    윈도우 이미지와 관련된 조작을 위한 커맨드 라인 명령어


  <br>


  **실행 화면**

  ```shell
  PS C:\\Users\\USERNAME> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  
  배포 이미지 서비스 및 관리 도구
  버전: 10.0.18362.900
  
  이미지 버전: 10.0.18363.1082
  
  기능을 사용하도록 설정하는 중
  [==========================100.0%==========================]
  작업을 완료했습니다.
  PS C:\\Users\\USERNAME>
  PS C:\\Users\\USERNAME> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  
  배포 이미지 서비스 및 관리 도구
  버전: 10.0.18362.900
  
  이미지 버전: 10.0.18363.1082
  
  기능을 사용하도록 설정하는 중
  [==========================100.0%==========================]
  ```


  ## 2. Linux 커널 업데이트 패키지 다운로드

  아래 링크를 통해 파일을 다운 받고 설치하면 된다.

  - Link: [Updating the WSL 2 Linux Kernel](https://www.notion.so/WSL2-Windows-Subsystem-for-Linux-2-9fbab1a367cc4e1ba8c9238c632d53a8#0428afd74c8444989911ec28010df28f)


  ## 3. WSL2 를 기본 버전으로 설정

  Powershell 을 관리자 권한으로 실행한 뒤 다음 명령어 실행

  ```
     wsl --set-default-version 2
  ```


  ## 4. 리눅스 배포판 설치

  windows 기본 앱인 Microsoft Store 에 들어가서 "Linux"를 검색하면 다양한 리눅스 배포판을 제공하고 있다. (해당 글에서는 [우분투](https://www.microsoft.com/ko-kr/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab) 배포판을 설치하였다)

  ms store 에서는 ubuntu 외에도 여러 배포판을 제공한다.

  - Microsoft Store 제공 리눅스 배포판
    - [Ubuntu 16.04 LTS](https://www.microsoft.com/store/apps/9pjn388hp8c9)
    - [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)
    - [Ubuntu 20.04 LTS](https://www.microsoft.com/store/apps/9n6svws3rx71)
    - [openSUSE Leap 15.1](https://www.microsoft.com/store/apps/9NJFZK00FGKV)
    - [SUSE Linux Enterprise Server 12 SP5](https://www.microsoft.com/store/apps/9MZ3D1TRP8T1)
    - [SUSE Linux Enterprise Server 15 SP1](https://www.microsoft.com/store/apps/9PN498VPMF3Z)
    - [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)
    - [Debian GNU/Linux](https://www.microsoft.com/store/apps/9MSVKQC78PK6)
    - [Fedora Remix for WSL](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)
    - [Pengwin](https://www.microsoft.com/store/apps/9NV1GV1PXZ6P)
    - [Pengwin Enterprise](https://www.microsoft.com/store/apps/9N8LP0X93VCP)
    - [Alpine WSL](https://www.microsoft.com/store/apps/9p804crf0395)


  ## 5. 리눅스 배포판 설정

  배포판 설치 후 실행을 시키면 콘솔 창이 열리고 세팅이 된 후에 사용자 계정과 암호를 입력하라는 메시지가 나온다. 계정과 메시지까지 입력하면 Linux 배포판을 설치 및 설정이 끝났다.





---

reference: [install Windows Subsystem for Linux (WSL) on Windows 10](https://www.notion.so/WSL2-Windows-Subsystem-for-Linux-2-9fbab1a367cc4e1ba8c9238c632d53a8#028e64b6e0604e1c9eeea77031b2c6ac)