---
title: "Binarized Neural Networks: Training Neural Networks with Weights and Activations Constrained to +1 or -1 (1)"
date: 2020-12-18
tags:
  - AI
  - NN
  - review
type: review
---

## Abstract

**BNNs (Binarized Neural Networks)**

-   neural networks with **binary wrights and activations** at run-time
-   at trining-time the binary weights and activations are userd for computing the gradients

**방법**

-   forward pass 동안, 메모리 사이즈와 접근을 줄이고, 대부분의 산술 연산을 비트 연산으로 대체함으로써 전력 효율성을 개선할 수 있다.

**검증**

-   two sets of experiments on Torch7 and Theano frameworks
    
-   검증 결과 MNIST, CIFAR-10, SVHN datasets 에서 매우 좋은 결과를 얻었다.
    
-   `binary matrix multiplication GPU kernel` 사용
    
    -   분류 정확도의 손실 없이, 최적화 되지 않은 GPU 커널보다 MNIST BNN 을 7배 빠르게 돌릴 수 있다.
        
    -   해당 훈련과 구동을 위한 BNNs 코드는 on-line 으로도 실행 가능하다.
        

## Introduction

Deep Neural Networks (DNNs)은 넓은 범위의 task 에서 실질적으로 인공지능 (Artificial Intelligence, AI)의 한계를 밀어냈다.

-   task 예시
    -   object recognition from images, speech recognition, statistical machine translation, Atari and Go games, abstract art, etc...

`DNN`은 대부분 Graphic Processing Units (GPUs)을 사용하여 훈련되는데 `GPU`는 빠르지만, 전력을 많이 소비한다.  
결과적으로 `DNN`을 `low-power device` 에서 구동하는 것은 어려운 일이 되었으며 **대부분의 연구가 범용 및 특화된 컴퓨터 하드웨어 `run-time` 에서 `DNN`을 가속화 하는데 집중되고 있다.**

### Contributions

1. run-time에서 binary weights, activations 로 BNN (Binarized-Neural-Networks)를 훈련하는 방법과 train-time에서 gradients 를 계산 하는 방법을 제안
2. BNN으로 MNIST, CIFAR-10, SVHN을 훈련시켰으며, 거의 최상의 결과를 얻어냄
  -   BNN은 Torch7과 Theano 프레임워크를 사용하여 구성하였다.
3. 효율성의 증가
  - 3.1) forward pass (run-time, train-time) 동안 BNN 이 메모리 소비 (크기와 접근 횟수)를 급격하게 줄이는 것을 보여준다.
  - 3.2) 에너지 효율성과 시간 복잡도의 감소
  - 대부분의 산술 연산자를 비트 연산자로 줄여 에너지 효율성을 증가시킨다.
  - binarized CNN 은 binalzed convolution kernel 의 반복으로 이어질 수 있다. 전용 하드웨어는 시간 복잡도를 60% 까지 감소시킬 수 있다고 예상된다.
4. binary matrix multiplication GPU kernel 를 프로그래밍
- 분류 정확도의 손실 없이, 최적화되지 않은 GPU 커널보다 MNIST BNN 을 7 배 빠르게 돌릴 수 있다.
5. BNN 을 위한 코드 (training and running)는 Torch와 Theano 프레임워크에서 on-line으로 실행이 가능