---
title: 'Command "python setup.py egg_info" failed with error code 1'
date: 2021-12-03
type: error
tags:
  - error
keywords:
---

package 설치 시, `Command "python setup.py egg_info" failed with error code 1` 출력과 함께 설치가 실패하는 경우 아래 명령어를 사용하여 `setuptools`를 설치 한 뒤, 다시 package를 설치해준다.

```bash
sudo -H pip3 install --upgrade --ignore-installed pip setuptools
```