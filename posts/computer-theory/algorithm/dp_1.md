---
title: "동적 계획법 (Dynamic Programming) 1"
date: 2020-11-30
type: theory
tags: [Algorithm]
draft: false
---

## 1. 동적 계획법 (DP, Dynamic Programming)

동적 계획법이란 복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법을 일컷는다. 이를 사용하여 반복적인 계산을 줄이고 효율적으로 최적해를 찾아낼 수 있다.

DP의 일반적인 원리는 주어진 문제에서 입력 크기가 작은 부분 문제 (subproblem)들을 해결한 뒤에, 그 해들을 결합하여 원래 주어진 입력의 문제를 해결하는 것이다.
이러한 방법으로 DP 는 불필요한 계산횟수를 줄이고 최적해를 찾아낼 수 있다. (즉, 최적화 문제를 해결한다.)

DP 를 이용하면 부분 문제 반복과 최적 부분 구조 (optimal substructure)를 가지고 있는 문제들을 일반적인 방법에 비하여 적은 시간 내에 해결할 수 있다.


***주요 용어***
- subproblem
  - 원래 문제보다 입력의 크기가 작은 동일한 문제를 말한다.
- optimal substructure
  - 어떤 문제의 최적해가 그것의 `subproblem`들의 최적해로부터 효율적으로 구해질 수 있을 때, 해당 문제는 `optimal substructure`를 가진다고 할 수 있다.


## 2. Dynamic Programming 적용

#### DP 적용 조건

- 최적 부분 구조 (optimal substructure)
  - 큰 문제의 최적해에 작은 문제의 최적해가 포함된다.
  - = 순환식으로 (재귀적으로) 표현이 가능하다.
    - 해당 문제를 재귀적 해법으로 풀면 같은 문제에 대한 재귀 호출이 매우 많이 중복된다.


#### DP 적용 방법

1. 전체 문제를 작은 문제로 단순화 한다. (주어진 문제에 대한 최적 부분 구조를 찾는다)
2. 문제를 재귀적인 구조로 표현한다. (순환식을 정의한다)
3. 작은 문제를 해결하는 방법으로 전체 문제를 해결한다. (문제를 푼다)


### 2.1. DP Problem: 피보나치 수열

#### 1) Recursion 

```cpp
int fib(int n){
    if(n == 1 || n==2) return 1;
    else return fib(n-1) + fib(n-2);
}
```
해당 `fib` 함수로 계산을 하면 많은 중복 계산이 발생하게 된다.



#### 2) Memoization


```cpp
int f[N] = {-1, };

int fib(int n){
    if(n == 1 || n==2) return 1;
    else if(f[n] != -1) return f[n]; // 이미 계산됨 -> 캐싱한 값을 리턴하여 중복 계산을 피함
    else{
        f[n] = fib(n-2) + fib(n-1);
        return f[n];
    }
}
```
memoization 은 ``f[n] = fib(n-1) + fib(n-2);`` 에서 처럼 caching 된 중간 계산 결과를 사용함으로써 중복 계산을 피한다.


#### 3) Dynamic Programming


```cpp
int fib(int n){
    f[1] = f[2] = 1;
    for(int i=3; i<n+1; i++)
        f[i] = f[i-2] + f[i-1];
    return f[n];
}
```

위처럼 문제를 푸는 방식을 bottom-up 방식이라 한다. 
DP 는 bottom-up 방식을 이용하여 중복 계산을 피한다.

## 3. Memoization vs Dynamic Programming 

Memoization (메모이제이션)과 DP (Dynamic Programming, 동적계획법)은 순환식의 값을 계산하는 기법으로 약간의 차이점이 존재하나 *둘 다 DP의 일종으로 간주*하기도 한다.

### Memoization
- Memoization은 top-down 방식이며, 실제로 필요한 subproblem 만을 푼다.
- Memoization은 recursion에 따른 오버헤드가 존재한다.

### Dynamic Programming
- DP 는 bottom-up 방식이며, 모든 subproblem 을 푼다.
- DP는 recursion에 수반되는 오버헤드가 없다.

