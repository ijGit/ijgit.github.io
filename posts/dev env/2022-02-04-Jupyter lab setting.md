---
title: "[devenv python] ubuntu jupyter lab setting"
date: 2022-02-04
type: tool
tags:
  - dev env
keywords:
  - python jupyter lab
  - ubuntu jupyter lab
  - jupyter lab
---



# Jupyter lab setting



## 1. install

아래 명령어로 jupyter lab 설치

```bash
python3 -m pip install jupyterlab
```



## 2. setting

설치를 완료하였으면 아래 글에 따라 jupyter lab 을 설정한다.

```bash
python3 -m jupyterlab --generate-config
```

위의 명령어를 실행하면 `~/.jupyter/jupyter_lab_config.py` 파일이 생성된다. 해당 파일의 내용을 작성하여 jupyter lab 설정을 할 수 있다.



먼저 비밀번호 설정부터 진행한다.

```bash
# 아래 명령어를 입력하면, 비밀번호를 입력하라고 한다.
# 생성된 비밀번호는 ~/.jupyter/juupyter_server_config.json 파일에 json 형식으로 저장되어 있다.
$ python3 -m jupyterlab password
Enter password:
Verify password:
[JupyterPasswordApp] Wrote hashed password to /home/user/.jupyter/jupyter_server_config.json


# 'password' 안의 내용을 ~/.jupyter/jupyter_lab_config.py
$ cat ~/.jupyter/jupyter_server_config.json
{
  "ServerApp": {
    "password": "argon2:$argon2id$v=19$m=10240,t=10,p=8$4d2gAmODPnOKxnxzLvo2OA$PKLhSHAfso/SY0iveln2KF9tOJ4kGR9VsaqMYDzA6jw"
  }
}

```



'password' 안의 내용을 `~/.jupyter/jupyter_lab_config.py` 파일 내의 `c.ServerApp.password` 값으로 설정해준다.

```py
c.ServerApp.password = 'argon2:$argon2id$v=19$m=10240,t=10,p=8$4d2gAmODPnOKxnxzLvo2OA$PKLhSHAfso/SY0iveln2KF9tOJ4kGR9VsaqMYDzA6jw'

```



그 외 설정 할 수 있는 값들은 아래와 같다.

```python
'''
~/.jupyter/jupyter_lab_config.py
'''


# 시작시 브라우저를 열 것인지
c.ExtensionApp.open_browser = False


# 외부 접속 허용
c.ServerApp.allow_origin = '*'


#  The string should be of the form type:salt:hashed-password.
# password: 'qwer1234'
c.ServerApp.password = 'argon2:$argon2id$v=19$m=10240,t=10,p=8$4d2gAmODPnOKxnxzLvo2OA$PKLhSHAfso/SY0iveln2KF9tOJ4kGR9VsaqMYDzA6jw'

# ip
c.ServerApp.ip='192.168.50.186'

# port
c.ServerApp.port=8888
```



## 3. kernel

가상환경을 활성화 한 뒤, 아래 명령어를 실행해준다.

```bash
python3 -m pip install ipykernel
python3 -m ipykernel install --user --name=VENV_NAME 
```



