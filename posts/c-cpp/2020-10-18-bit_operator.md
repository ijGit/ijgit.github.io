---
title: "[C/C++] 비트 연산자 (bit operator)"
date: 2020-10-18
tags:
  - C/C++
  - bit
keywords:
  - C/C++ 비트 연산자
  - bit operator
---


# 1. 비트 연산자


|     이름    |    연산자    |  사용 방법        | 설명                       |
|---------|-----------|-----------------|----------------------------------------|
| AND  | &    | A & B   | A, B가 모두 1인 경우 1  |
| OR   | \|   | A \| B  | A 또는 B 둘 중 하나가 1인 경우 1  |
| XOR  | ^    | A ^ B   | A, B 가 서로 다른 경우 1  |
| 좌측 시프트 | <<  | A << B  | A의 비트를 B만큼 왼쪽으로 시프트<br>ex) 0010 << 1 = 0100  |
| 우측 시프트 | >>  | A >> B  | A의 비트를 B만큼 오른쪽으로 시프트<br>ex) 0010 >> 1 = 0001  |
| NOT   | ~   | ~A  | A의 비트를 반전<br> ex) ~(0101) = 1010|




# 2. 유용한 정보


## 2.1. 시프트 연산자는 음수에 사용하면 안된다

- 시프트 연산자는 음수에 사용하면 비트 오버플로우가 발생하여 예상치 않은 결과가 발생한다.
  - 피연산자가 음수이면 정의되지 않은 동작이 발생한다.
  - 같은 이유로 숫자가 정수 크기보다 많이 이동하면 정의되지 않은 동작이 발생한다.



## 2.2. XOR bit operator

비트 XOR 연산자는 기술 인터뷰 / 알고리즘 문제에서 유용한 연산자이다

비트 XOR 연산자는 많은 문제에서 사용된다. 간단한 예로, 모든 요소가 하나의 숫자를 제외하고 짝수 번 발생하는 일련의 숫자가 주어졌을 때, **홀수 번 발생하는 숫자 `N`**를 찾아야 한다면 XOR 연산자를 사용하여 쉽게 풀 수 있다. <br>
XOR 연산자는 **피연산자들이 서로 다른 경우 1을 반환**하는데 반대로 **서로 같은 경우에는 0을 반환**한다. XOR 연산을 거치면 **같은 비트 자리에 1이 짝수번 반복되어 나왔을 때 해당 자리는 0**이된다. 해당 원리를 이용하여 홀수 번 발생하는 숫자 `N`을 쉽게 찾을 수 있다.


#### code

```cpp
#include <stdio.h>

// function to return the only odd occurring element
int findOdd(int arr[], int n){
    int res = 0, i;
    for(int i=0; i<n; i++){
        res ^= arr[i];
    }
    return res;
}

int main(){
    int arr[] = {1, 1, 2, 2, 3};
    int n = sizeof(arr)/sizeof(arr[0]);

    printf("the odd occurring element is %d\\n", findOdd(arr, n));
    return 0;
}
```

#### output

```
the odd occurring element is 3
```



## 2.3. & bit operator

- `&` 연산자를 이용하면 숫자가 홀수인지 짝수인지를 빠르게 확인 가능하다.
  - 표현식 ``N&1``의 값은 ``N``이 홀수인 경우에는 1이고, 짝수인 경우에는 0이다. 
  - 만약 `N`이 홀수라면 비트의 최하위비트 $(2^0)$가 1이어야 하고, 짝수라면 0이어야 한다. `N`과 1에 대해 AND 연산을 하면 마지막 비트가 1인 경우 (홀수인 경우)에만 1이 되므로 짝수인지 홀수인지를 빠르게 알아낼 수 있다.


#### code

```cpp
#include <stdio.h>

// function to return whether the number is odd or not.
bool isOdd(int n){
   return (n&1)? true:false;
}

int main(){
    printf("3 is odd?: %d\\n", isOdd(3));
    printf("4 is odd?: %d\\n", isOdd(4));
    printf("7 is odd?: %d\\n", isOdd(7));
}
```

#### output

```cpp
3 is odd?: 1
4 is odd?: 0
7 is odd?: 1
```