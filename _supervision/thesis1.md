---
layout: page
title: 基于二维草图的三维模型检索
student: 
year: 2024
description: >
  毕业设计旨在研究基于二维草图的三维模型检索系统，结合深度学习技术提取草图特征并与三维模型数据库匹配。
importance: 1
category: undergraduate
---

研究方向：

检索系统；二维草图

题目简介：

三维模型在游戏、动画、虚拟现实等领域有着广泛的应用，随着元宇宙和数字化产业的蓬勃发展，对高质量三维模型资产的需求不断增长。然而，创建这些三维资产通常需要专业的建模经验，普通用户很难快速上手。为了降低三维模型内容创作的门槛，本课题研究如何通过二维草图进行三维模型检索。通过使用手绘草图进行检索，用户可以更简便、直观地找到符合其设计意图的三维模型，避免复杂的建模过程。

本课题的主要目标是设计并实现一个基于二维草图的三维模型检索系统。该系统将结合深度学习技术，从用户的二维草图中提取特征，并与数据库中的三维模型进行匹配。研究的核心问题包括：如何有效地从草图中提取视觉特征，以及如何优化检索算法以提高检索的精度和效率。通过本研究，旨在为三维内容创作提供更高效的工具，提升用户体验。

完成课题的基本要求：

- 熟练掌握Python语言，最好有训练深度学习模型和一定的三维模型处理经验。
- 对相关概念有一定的理解，包括：三维模型渲染，contrastive learning，retrieval system。

参考资料：

Sketch-based 3D Shape Retrieval using Convolutional Neural Networks，CVPR 2015

Learning Barycentric Representations of 3D Shapes for Sketch-based 3D Shape Retrieval，CVPR 2017

Toward Fine-Grained Sketch-Based 3D Shape Retrieval，TIP 2021

## 一、主要任务与目标

1. 调研当前基于草图的三维检索研究进展（毕设论文的研究背景部分）；
2. 实现基于二维草图的三维模型检索系统：根据熟悉情况选择三维模型的表征方式：a. 将三维模型渲染为二维图像再使用image encoder b. 将三维模型采样为点云（point cloud）再使用point net encoder，如PointNet++；
3. （可选）a.在现有方案上提出改进策略，进一步优化检索效果 b.对比不同的三维模型表征方式对检索效果的影响。

## 二、主要内容与基本要求

第一阶段：了解数据集（ShapeNet）及相关基本概念（point cloud，mesh rendering，triplet loss，top-k accuracy）。了解一下mesh渲染脚本，比如blender，mitsuba。调研当前基于草图的三维重建研究进展。

第二阶段：搭建基于草图的三维模型检索系统，具体包括三个模块：1.对二维草图进行编码（image encoder）2.对三维模型进行编码（shape encoder）3. 将草图和三维模型在latent space中拉近/拉远（triplet loss）。

第三阶段：视第二阶段完成进度选择可选任务。

## 三、计划进度

开题阶段：

2024年11月1日到12月30日：阅读参考文献，完成文献综述、外文翻译和开题报告等工作。

2025年1月5日前：完成第一阶段的工作，准备开题答辩。

实施阶段：

2025年5月3日前 ：完成第二、三阶段的工作，完成毕业设计论文。

答辩阶段：

2025年5月20日前：准备毕设答辩。