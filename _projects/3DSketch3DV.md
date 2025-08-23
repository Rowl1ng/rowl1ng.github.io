---
layout: page
title: 3D VR Sketch
description: Towards 3D VR-Sketch to 3D Shape Retrieval
img: assets/img/projects/VR_Sketch.png
github: https://github.com/ygryadit/Towards3DVRSketch
importance: 2
category: work
---

## Abstract

Growing free online 3D shapes collections dictated research on 3D retrieval. Active debate has however been had on (i) what the best input modality is to trigger retrieval, and (ii) the ultimate usage scenario for such retrieval. 
In this paper, we offer a different perspective towards answering these questions -- we study the use of 3D sketches as an input modality and advocate a VR-scenario where retrieval is conducted. Thus, the ultimate vision is that users can freely retrieve a 3D model by air-doodling in a VR environment.
As a first stab at this new 3D VR-sketch to 3D shape retrieval problem, we make four contributions. 
First, we code a VR utility to collect 3D VR-sketches and conduct retrieval.
Second, we collect the first set of 167 3D VR-sketches on two shape categories from ModelNet.
Third, we propose a novel approach to generate a synthetic dataset of human-like 3D sketches of different abstract levels to train deep networks.
At last, we compare the common multi-view and volumetric approaches: 
We show that, in contrast to a 3D shape retrieval from a reference 3D shape,  volumetric point-based approaches exhibit superior performance for a retrieval from a reference 3D sketch due to the sparse and abstract nature of 3D VR-sketches.
We believe these contributions will collectively serve as enablers for future attempts at this problem.

### Dataset Visualization



### Resources

Code Projects:

- [Sketch Generation][1]
- [VR Sketch Interface][2]

Synthetic sketch and human sketch dataset link：
- [Google Drive][4]



[1]: https://github.com/ygryadit/Towards3DVRSketch
[2]: https://github.com/Rowl1ng/Sketch_VR
[4]: https://drive.google.com/file/d/1FkKZfWt7O4xMy4ir5kCYcmwZLPk1uBcZ/view?usp=sharing
