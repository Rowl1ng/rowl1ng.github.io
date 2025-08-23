---
layout: page
title: 基于二维草图的细粒度图像检索
student: 
year: 2024
description: >
  毕业设计旨在研究通过二维草图进行细粒度图像检索，比较基于草图和文本的检索方法。
importance: 1
category: undergraduate
---

研究方向：

二维草图；检索算法

题目简介：

本课题旨在研究如何通过二维草图进行细粒度图像检索。细粒度图像检索 (FGIR) 指的是搜索某个物体实例的照片，比如搜索一把特定造型的椅子。通常有两种方法：基于草图的FGIR和基于文本的FGIR，它们各自具有不同的优缺点。相比于传统的基于文字或图片的检索，简单的手绘草图能够直接反映用户的视觉印象，是一种更加直观的输入方式。本项目的目标是研究这两种输入模式各自的信息量，以及在联合建模时它们是否互为补充。为实现这一目标，我们首先需要分别使用三元组损失实现一个基于草图的图像检索系统和一个基于文本的图像检索系统。然后将使用多模态四元组损失来联合建模这两种模式。

基本要求：

- 熟练掌握Python语言，最好有训练深度学习模型经验。
- 对相关概念有一定的理解，包括：image encoder，contrastive learning，retrieval system。

参考资料：

Sketch Me That Shoe，CVPR 2016

Fine-Grained Image Retrieval: the Text/Sketch Input Dilemma，BMVC 2017

## 一、主要任务与目标

1. 调研当前基于草图的细粒度检索的研究进展（毕设论文的研究背景部分）；
2. 实现基于草图的图像检索系统；
3. 基于CLIP实现zero-shot检索。

## 二、主要内容与基本要求

第一阶段：熟悉数据集（shoeV2）及相关概念（CLIP，image encoder，triplet loss，contrastive learning，top-k accuracy）。调研当前的研究进展。

第二阶段：实现基于triplet loss的sketch-based iamge retrieval system。

第三阶段：引入CLIP模型的text encoder

## 三、计划进度

开题阶段：

2024年11月1日到12月30日：阅读参考文献，完成文献综述、外文翻译和开题报告等工作。

2025年1月5日前：完成第一阶段的工作，准备开题答辩。

实施阶段：

2025年5月3日前 ：完成第二、三阶段的工作，完成毕业设计论文。

答辩阶段：

2025年5月20日前：准备毕设答辩。