---
title: "[Git error] fatal: 'origin' dose not appear to be a git repository"
date: 2020-10-29
type: error
tags:
  - error
  - Git
keywords:
---

# 문제 상황

git push를 하던중에 오류가 발생하며 push 를 실패하였다.

```shell
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```



# 해결

## 1. origin 이 설정되었는지 확인

```shell
$git remote -v
```

해당 명령어를 실행하면 프로젝트의 모든 push/fetch remote 가 표시된다. 
만약 출력이 없이 반환된다면, 아래 명령어로 누락된 remote 를 추가하고 push 를 진행하면 된다. (목차 4와 일치)

```shell
$git remote add origin REPOSITORY_URL
$git push origin master
```
  
## 2. remote name, repository URL 확인

remote 가 추가되어 있다는 메시지가 반환되면 리모트 이름이 사용중인 리모트와 일치하는지 확인한다.


```shell
$git remote -v
origin REPOSITORY_URL (fetch)
origin REPOSITORY_URL (push)
```

## 3. 이전 remote 제거
remote 이름을 변경하거나 URL 을 변경하려면 먼저 이전 remote 를 제거한 다음 올바른 remote를 추가해야한다.

```shell
$git remote remove origin
```


## 4. 누락된 remote 추가 
삭제를 했으면 적절한 remote를 추가할 수 있다.

```shell
$git remote add REPOSITORY_URL
$git push origin master
```


<br>

-----
reference

- https://stackoverflow.com/questions/32238616/git-push-fatal-origin-does-not-appear-to-be-a-git-repository-fatal-could-n/32238628