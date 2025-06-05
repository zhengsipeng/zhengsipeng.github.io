---
title: "POV: Prompt-Oriented View-agnostic Learning for Egocentric Hand-Object Interaction in the Multi-view World"
collection: publications
permalink: /publication/2023-3-paper-POV
excerpt: 'This paper propose a prompt-oriented view-agnostic learning framework for multi-view action understanding.'
date: 2023-10-01
venue: 'Proceedings of the 31st ACM International Conference on Multimedia'
paperurl: 'https://doi.org/10.1007/s00704-018-2617-z'
citation: 'B Xu, S Zheng, Q Jin. "POV: Prompt-Oriented View-agnostic Learning for Egocentric Hand-Object Interaction in the Multi-view World." <i>2023 Proceedings of the 31st ACM International Conference on Multimedia</i>. 2807-2816.'
---
We humans are good at translating third-person observations of hand-object interactions (HOI) into an egocentric view. However, current methods struggle to replicate this ability of view adaptation from third-person to first-person. Although some approaches attempt to learn view-agnostic representation from large-scale video datasets, they ignore the relationships among multiple third-person views. To this end, we propose a Prompt-Oriented View-agnostic learning (POV) framework in this paper, which enables this view adaptation with few egocentric videos. Specifically, We introduce interactive masking prompts at the frame level to capture fine-grained action information, and view-aware prompts at the token level to learn view-agnostic representation. To verify our method, we establish two benchmarks for transferring from multiple third-person views to the egocentric view. Our extensive experiments on these benchmarks demonstrate the efficiency and effectiveness of our POV framework and prompt tuning techniques in terms of view adaptation and view generalization.


<figure style="text-align: center;">
<img src="../images/10-mm23_pov.png" width="100%" height="100%" alt="替代文本">
<figcaption style="text-align: center; font-size: 18px">Figure 1: Overall framework of our proposed POV model.</figcaption>
</figure>