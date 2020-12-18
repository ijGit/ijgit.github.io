---
title: "[AI, ML] Data Rescaling (표준화와 정규화)"
date: 2020-11-09
tags:
  - AI
  - Machine Learning
---

## 표준화 (Standardization)

- 데이터가 **평균으로부터 얼마나 떨어져 있는지 나타내는 값**

$$z = \\frac{x - \\bar{x}}{\\sigma}$$

- 특정 범위를 벗어난 데이터는 outlier 로 간주하고 제거함
- 이상치(outlier)를 잘 처리하지만, 정확히 동일한 척도로 정규화 된 데이터를 생성하지는 않는다.

## 정규화 (Normalization)

- 데이터의 **상태적 크기에 대한 영향을 줄이기 위해** 데이터 범위를 0~1로 변환

$$X\_{new} = \\frac{x-x\_{min}}{x\_{max}-x\_{min}}$$

- min-max 스케일링
- 모든 feature들의 스케일이 동일하지만, 이상치(outlier)를 잘 처리하지 못한다

## 데이터 분석 적용

(요구사항: outlier 제거)

1.  데이터 표준화를 통해 outlier 제거
2.  데이터 정규화를 통해 상대적 크기에 대한 영향력 줄임