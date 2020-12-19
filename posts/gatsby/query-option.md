---
title: GraphQL 정리
date: 2020-11-27
tags: [gatsby]
draft: false
---

## 스키마 & 타입

- `String`: 스칼라타입
- `String!` 필드가 `non-nullable`임을 의미 (항상 값을 리턴)
- [Episode]!: `non-nullable`이며, `Episode` 객체의 배열을 나타냄




## filter (필터) 

GraphQL의 필터 옵션은 AND 로 동작한다.

```js
filter: { contentType: { in: ["post", "page"] }, draft: { eq: false } }
```

- 연산자 목록
  - `eq` (equal): 주어진 데이터와 일치
  - `ne` (not equal): 주어진 데이터와 다름
  - `regex` (regular expression): 주어진 패턴과 일치
    - 백슬래시를 두 번 이스케이프해야 하므로 `"/\w+/"`는 `"/\\\\\w+/"`로 써야 한다는 점에 유의
  - `glob` (global): 비 멀티캐스트 문자열의 자리 표시자 역할을 하는 와일드카드 (`*`) 사용 허용 
  - `in` (in array): 배열의 요소
  - `nin` (not in array) 배열의 요소가 아님
  - `gt` (greater than): 주어진 값보다 큼
  - `gte` (greater than or equal): 주어진 값보다 크거나 같음
  - `lt` (less than): 주어진 값보다 작음
  - `lte` (less than or equal): 주어진 값보다 작거나 같음
  - `eleMatch` (element match): 필터링 중인 필드가 이전 연산자를 사용하여 필터를 적용할 수 있는 요소 배열을 반환

