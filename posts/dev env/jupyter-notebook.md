---
title: "[devenv] Jupyter notebook 환경 설치"
date: 2020-10-29
type: tool
tags:
  - dev env
---

## 1. Install (설치)

### Anaconda

-   아나콘다는 과학계산을 위한 Python / R 프로그래밍 언어 패키지 배포판이다.
-   아래 링크를 통해 다운로드가 가능하다.
-   Anaconda Installer
    -   [https://www.anaconda.com/distribution/](https://www.anaconda.com/distribution/)
    -   Windows
        -   [https://docs.anaconda.com/anaconda/install/windows/](https://docs.anaconda.com/anaconda/install/windows/)
    -   macOS
        -   [https://docs.anaconda.com/anaconda/install/mac-os/](https://docs.anaconda.com/anaconda/install/mac-os/)
-   Advanced Installation Options

## 2. Setting (config)

아래 명령어를 실행하여 jupyter notebook 설정을 위한 파일을 생성할 수 있다.

```shell
jupyter notebook --generate-config

# C:\Users\username\.jupyter\jupyter_notebook_config.py 파일 생성
```

- jupyter\_notebook\_config.py 내부 파일은 주석 처리 상태로 효과가 없다.
- 주석 해제와 값 설정을 통해 원하는 옵션을 지정 가능하다.

#### 시작 디렉토리 설정 옵션

원하는 작업 디렉토리에서 시작할 수 있도록 설정할 수 있는 옵션

```python
 ## The directory to use for notebooks and kernels.
 c.NotebookApp.notebook_dir = 'C:\\Users\\USERNAME\\Documents\\workspace'
```

- jupyter notebook 의 기본 시작 디렉토리는 C:/Users/USERNAME 이다.
- 다른 작업 디렉토리가 존재한다면 위의 변수를 수정하여 작업디렉토리에서 jupyter notebook 이 실행되도록 변경할 수 있다.

## 3. Extensions (확장 프로그램)

### 확장 프로그램 설치

아래 명령어를 실행하여 conda 또는 pip 을 통해 확장프로그램 설치가 가능하다.

```shell
# install with anaconda 
conda install -c conda-forge jupyter_contrib_nbextensions 

# install with pip
pip install jupyter_contrib_nbextensions
```

설치가 끝났다면 아래 명령어를 실행하여 활성화를 해주어야 한다.

```shell
jupyter contrib nbextension install --user
```

### 확장 프로그램 추천

1. Collapsible headings
  -   markdown header에 따라 노트북 접기 기능을 제공한다.
2. Table of Conents
  - markdown header 수준에 따른 목차를 생성해준다.
3. code folding
4. code prettify

## 4. Virtual Environment in Jupyter notebook kernel

`conda` 프롬프트에서 아래 명령어를 통해 가상환경을 만들 수 있다.

1. 가상환경 추가 / activate
    
  ```shell
  activate VENV_NAME
  ```
    
2. 'ipykernel' 라이브러리 설치
    
  ```shell
  pip install ipykernel
  ```
    
3. 커널 추가
    
    ```shell
    python -m ipykernel install --user --name=VENV_NAME
    
    python -m ipykernel install --user --name  VIRTUAL_ENV --display-name "IPYKERNEL_NAME"
    ```
    
4. 커널 제거
    
    ```shell
    jupyter kernelspec uninstall
    ```