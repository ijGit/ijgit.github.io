---
title: "[Git error] ![rejected] Note about fast-forwards"
date: 2020-10-15
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


# 문제 상황



* ``git push`` 명령어 실행시 아래와 같은 오류 발생 

    ```bash
    $ git push
    To https://github.com/...
    ! [rejected]        develop -> develop (non-fast-forward)
    error: failed to push some refs to 'https://github.com/...'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. Integrate the remote changes (e.g.
    hint: 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.
    ```



# 해결 방법 


강제로 ``push``를 진행하였다.


```
git checkout BRANCH_NAME
git push -f origin BRANCH_NAME
```





---

reference

* https://stackoverflow.com/questions/24414854/git-push-error-rejected-develop-develop-non-fast-forward