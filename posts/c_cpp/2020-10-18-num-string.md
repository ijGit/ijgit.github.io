---
title: "[C/C++] 문자열을 숫자로 변환"
date: 2020-10-18
tags:
  - "C/C++"
keywords:
  - string to num
  - 문자열을 숫자로 변환
---

# 1. sstringstream()


#### code

```cpp
#include <iostream>
#include <sstream>  // for stringstream function

using namespace std;
int main(){
    string s = "12345";
    stringstream str(s);    // object from the class stringstream

    int n = 0;
    str >> n;   

    cout << "the value of n: " << n << endl;

    return 0;
}
```

#### output

```cpp
the value of n: 12345
```


# 2. sscanf()

`sscanf()`는 `scanf()`와 유사한 C스타일 함수이다. 표준 입력이 아닌 문자열에서 입력을 읽는다.

#### code

```cpp
#include <stdio.h>

int main(){
    int n;
    sscanf("12345", "%d", &n);
    printf("the value of n: %d\\n", n);

    return 0;
}
```

##### output


```cpp
the value of n: 12345
```

# 3. stoi()

`stoi()` 함수는 문자열을 인수로 받아 정수를 반환한다.

- 정수를 반환한다는데에 주의해야 한다. 3.14를 넘겨도 3을 반환해준다.


#### code

```cpp
#include <string>   // for stoi() function
#include <iostream>
using namespace std;

int main(){
    int n = stoi("12345");
    printf("the value of n: %d\\n", n);

    return 0;
}
```

#### output

```cpp
the value of n: 12345
```


# 4. atoi()

- `atoi()` 함수는 c 스타일 함수이다. `stoi`는 c++ 문자열 (string) 과 c 문자열 (char array)에서도 동작하나 `atoi()`는 c 문자열에 대해서만 동작한다.
- 문자열을 정수가 아닌 실수로 변환하고 싶을 때에는 `atof()`함수를 사용하면 된다.


#### code

```cpp
#include <stdio.h>
#include <stdlib.h> // for atoi() function

int main(){
    int n = atoi("12345");
    printf("the value of n: %d\\n", n);

    return 0;
}
```

#### output

```cpp
the value of n: 12345
```