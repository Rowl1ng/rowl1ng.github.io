---
layout: page
title: 基于二维草图的三维模型重建
student: 
year: 2024
description: >
  毕业设计旨在研究基于二维草图的三维模型重建技术，以满足虚拟现实和游戏行业对三维内容的需求。
importance: 1
category: undergraduate
---

研究方向

二维草图；三维重建

题目简介：

随着虚拟现实、游戏等行业的快速发展，三维内容的需求大幅增加。然而，传统的三维建模方法对使用者的技能和经验要求较高，同时耗费大量时间和人力成本，使得普通用户难以快速上手。基于二维草图的三维模型重建技术有望解决这一问题。该技术通过简单的手绘草图输入，能够快速生成高质量的三维模型，大幅降低3D建模的复杂性和门槛，特别适合缺乏专业背景的用户使用。

本课题的研究重点是如何从二维草图中自动生成对应的三维模型，主要任务包括：首先，构建一个能够从草图中提取特征的深度学习模型，将二维草图的结构信息准确转换为三维几何形态。其次，设计高效的生成算法，确保生成模型的几何精度和细节还原。此外，还需要开发针对多视角草图的重建方法，以进一步提高三维模型的完整性和准确性。

基本要求：

- 熟练掌握Python语言，最好有训练深度学习模型和一定的三维模型处理经验。
- 对相关概念有一定的理解，包括：image encoder，shape reconstruction。

参考资料：

3D Shape Reconstruction from Sketches via Multi-view Convolutional Networks，3DV 2017

Sketch2Mesh: Reconstructing and Editing 3D Shapes from Sketches，ICCV 2021

[**3d shape reconstruction from free-hand sketches](https://link.springer.com/chapter/10.1007/978-3-031-25085-9_11)，ECCV 2022**

## 一、主要任务与目标

1. 调研当前基于草图的三维重建研究进展（毕设论文的研究背景部分）；
2. 实现基于草图的三维重建模型：暂定重建对象为三维点云（point cloud），如果时间充裕可以考虑重建为mesh、SDF等三维表征；
3. （可选）a.在现有方案上提出改进策略，进一步优化重建效果。b.实现从多视图草图的三维模型重建，并比较和单视图的重建效果差异。

## 二、主要内容与基本要求

第一阶段：了解数据集（ShapeNet）及相关基本概念（point cloud，mesh，shape reconstruction）。最好了解一下point cloud可视化以及制作gif动图（如果选择mesh，可了解一下mesh渲染脚本，比如blender，mitsuba），在答辩时会比较加分，比如https://streamable.com/z76m47。调研当前基于草图的三维重建研究进展。

第二阶段：搭建基于草图的三维重建基础模型，实现比较基础的重建效果。具体包括两个模块：1.对二维草图进行编码（image encoder）2.从latent space中解码出三维模型（shape decoder）。

第三阶段：视第二阶段完成进度选择可选任务。

## 三、计划进度

开题阶段：

2024年11月1日到12月30日：阅读参考文献，完成文献综述、外文翻译和开题报告等工作。

2025年1月5日前：完成第一阶段的工作，准备开题答辩。

实施阶段：

2025年5月3日前 ：完成第二、三阶段的工作，完成毕业设计论文。

答辩阶段：

2025年5月20日前：准备毕设答辩。