---
title: "[Algorithm] 정렬 알고리즘"
date: 2020-12-18
tags: [algorithm]
draft: false
keywords: 
  - sorting algorithm
  - 정렬 알고리즘
  - 분할 정복
  - divide and conquer
---



## 1. 정렬 알고리즘의 종류

1. 기본 정렬 알고리즘
   - 시간 복잡도가  $O(n^2)$ 인 정렬 알고리즘
   - Selection sort (선택 정렬), Bubble sort (버블 정렬), Insert sort (삽입 정렬)이 해당한다.
2. 고급 정렬 알고리즘 
   - 시간 복잡도가 $O(nlogn)$인 정렬 알고리즘
   - Merge sort (병합 정렬), Quick sort (퀵 정렬), Heap sort(힙 정렬)이 해당한다.
3. 특수 정렬 알고리즘 
   - 시간 복잡도가 $O(n)$인 알고리즘
   - counting sort (계수 정렬), Radix sort (기수 정렬)이 이에 해당한다.



## 2. 기본 정렬 알고리즘

- 시간 복잡도가  $O(n^2)$ 인 정렬 알고리즘

  

### 2.1. 선택 정렬 (Selection sort)

전체 입력 배열에 대해 차례대로 **최대값 또는 최소값**을 "**선택"** 하여 마지막 원소와 자리를 교환하여 정렬하는 알고리즘

1. 각 루프마다 최대 (또는 최소) 원소를 찾는다.

2. 최대 원소와 마지막 자리의 원소를 교환한다.

3. 마지막 자리의 원소 (이전 루프의 최대 원소)를 제외하고 하나의 원소만 남을 때까지 루프를 반복한다.

   ```c
   /*
   배열 A[1, ..., n] 을 정렬
   sort array A[1, ..., n]
   */
   selectionSort(A[], n){
     for last ← n downto 2{
       A[1 ... last] 중 가장 큰 수 A[k] 를 찾는다.
       swap(A[k], A[last]);
     }
   }
   ```

   

#### 수행 시간

- `line 6`: 루프는 `n-1` 번 반복 된다.
- `line 7`: 최댓 값을 찾기 위한 비교 횟수는 `n-1` 부터 `1`까지 이다.
- 원소 교환은 입력과는 관계없는 상수 시간 작업이다.
- $T(n) = (n-1) + (n-2) +... + 2 + 1 = n(n-1)/2 = O(n^2)$



#### Selection sort in C++

```cpp
void selectionSort(int A[], int n){
  for (int last = n - 1; last > 0; last--){

    /* 최댓값 찾기 (Search maxinum value in A[0, ..., last]) */
    int max_idx = 0;
    for (int i = 0; i < last+1; i++){
      max_idx = (A[max_idx] > A[i]) ? max_idx : i;  
      
      /* 최댓값을 가장 끝으로 이동 (Move max to end) */
      swap(A+max_idx, A+last);
      //  swap(&A[max_idx], &A[last]);
    }
  }
}
```



### 2.2. Bubble sort (버블 정렬)

연속된 인덱스의 숫자를 비교하여 큰 수를 뒤 쪽으로 이동시키는 과정을 반복하여 정렬하는 알고리즘

1. 현재 인덱스 [i] 값과 다음 인덱스 [i+1] 값을 비교한다.
2. 현재 인덱스의 값이 더 크다면 다음 인덱스와 교환한다.
3. 현재 인덱스의 값이 더 작다면, 교환하지 않고 넘어간다.
4. 루프를 한 바퀴 돌 때마다 가장 큰 값이 맨 뒤에 저장된다.

```c
/*
배열 A[1, ..., n] 을 정렬
sort array A[1, ..., n]
*/
bubbleSort(A[], n){
  for last ← n downto 2
    for i ← 1 to last-1
      if (A[i] > A[i+1]) then swap(A[i], A[i+1]);
}
```



#### 수행 시간

- `line 6` : 첫 번째 for 루프는 `n-1`번 반복된다.
- `line 7`: 두 번째 for 루프는 `n-1, n-2, ..., 2, 1` 번 반복된다.
- 원소 교환은 입력과는 관계없는 상수 시간 작업이다.
- $T(n) = (n-1) + (n-2) +... + 2 + 1 = n(n-1)/2 = O(n^2)$



#### Bubble sort in C++

```cpp
void bubbleSort(int data[], int n){
  for(int i=n-1; i>0; i--){
    for(int j=0; j<i; j++){
      /*이웃한 쌍을 비교하여, 순서가 잘못되어 있으면 자리 교환
      Compare adjacent items, and swap (if misordered)
      */
      if(data[j] > data[j+1])
        swap(data+j, data+j+1);
    }
  }
}
```



### 2.3. Insertion sort (삽입 정렬)

배열을 정렬된 부분 (앞 부분)과 정렬이 되지 않은 부분 (뒷 부분)으로 나누고, 정렬이 되지 않은 부분의  원소를 정렬된 부분의 적절한 위치에 "**삽입**"하여 정렬하는 알고리즘

1. 현재  인덱스 [i]를 기준으로 비교 인덱스 [1, ..., i-1] 를 잡는다.
2. [1, ..., i-1] 인덱스 값 중 [i] 인덱스의 값보다 큰 값이 있다면 해당 인덱스에 [i] 값을 삽입한다.

```c
/*
배열 A[1, ..., n] 을 정렬
sort array A[1, ..., n]
*/
insertionSort(A[], n){
  for i ← 2 to n{
    A[i-1] 부터 A[1] 까지 순서대로 비교하여 
      A[1, ..., i] 의 적절한 위치에 A[i]를 삽입
  }
}
```



#### 수행시간

- line 6: for 루프는 n-1번 반복된다.
- line 7-8:
  - 삽입을 위한 비교는 최악의 경우 i-1 번 발생한다.
  - 최선의 경우에는 1번만 비교할 수도 있다.
- 최악의 경우,
  - $T(n) = (n-1) + (n-2) +... + 2 + 1 = n(n-1)/2 = O(n^2)$
- 최선의 경우,
  - $T(n) = O(n)$



#### Insertion sort in C++

```c
void insertionSort(int data[], int n){
  for(int i=1; i<n+1; i++){
    for(int j=i; j>0; j--){
      if(data[j] < data[j-1]){
        /* 적절한 위치가 나올때까지 swap 하면서 원소 이동 */
        swap(data+j, data+j-1);
      }else{
        break;
      }
    }
  }
}
```



## 3. 고급 정렬 알고리즘

- 시간 복잡도가  $O(nlogn)$ 인 정렬 알고리즘
- merge sort, quick sort, heap sort이 이에 해당한다.
- 최악의 경우에도 merge sort 와 heap sort는 $O(nlogn)$이 소요되나 quick sort는 $O(n^2)$이 소요된다.
- quick sort는 최악의 경우 성능이 가장 나쁘나,  캐시 효율이 높기 때문에 다른 정렬보다 빠르다.
  - [퀵 정렬이 다른 정렬보다 빠른 이유](https://qastack.kr/cs/3/why-is-quicksort-better-than-other-sorting-algorithms-in-practice)

 

### 분할 정복법 (divide and conquer)

분할 정복법 (divide and conquer)은 여러 알고리즘의 기본이 되는 해결 방법으로 이를 사용하는 알고리즘에는 대표적으로 merge sort와 quick sort가 해당한다. 

- 알고리즘 설계 순서
  1. Divide (분할): 해결하고자 하는 문제를 작은 크기의 동일한 문제로 분할한다.
  2. Conquer (정복): 각각의 작은 문제를 재귀적으로 해결한다.
  3. Combine (취합): 작은 문제의 해를 합하여 원래 문제에 대한 해를 구한다.



### 3.1. 병합 정렬

1. Divide (분할): 데이터가 저장된 배열을 절반으로 나눈다.
2. Conquer (정복): 각각을 재귀적으로 정렬한다.
3. Combine (취합): 정렬된 두 개의 배열을 합쳐 전체를 정렬한다.

```c
// p: 배열 시작 인덱스
// r: 배열 끝 인덱스
mergeSort(A[], p, r){
  if (p < r) then {
    q <- (p + q)/2;
    mergeSort(A, p, q);
    mergeSort(A, q+1, r);
    merge(A, p, q, r);
  }
}

merge(A[], p, q, r){
  // 정렬되어 있는 두 배열 A[p...q]와 A[q+1...r]을 합하여
  // 정렬된 하나의 배열 A[p...r]을 생성
}
```



#### 동작 예시


