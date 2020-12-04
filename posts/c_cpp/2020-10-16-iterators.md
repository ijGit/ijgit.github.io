---
title: "[C/C++] Iterators (반복자)"
date: 2020-10-16
draft: true
# update: 2020-03-08
tags:
  - "C/C++"
keywords:
  - "C/C++"
  - c/cpp
  - iterators
---


## 1. loop 활용

### 1.1. look over all elements
``(int i=0; i< n; i++)`` 방식과 같이 모든 요소를 살펴볼 때 사용한다.

```cpp

#include <vector>
#include <iostream>

vector <int> vec{0, 1, 2, 3, 4};
for(auto it = begin(vec); it != end(vec); it++){
    // Access element using dereference operator
    std::cout << *it << " ";
}
```

<br>

같은 방식이지만, 더 간단하게 ``range-for loop`` 를 사용할 수도 있다.

```cpp
for (auto num:vec){
    // no dereference operator
    cout << num << " ";
}
```
