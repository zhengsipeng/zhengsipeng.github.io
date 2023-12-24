---
title: "LLaMA Rider: Spurring Large Language Models to Explore the Open World"
collection: publications
permalink: /publication/2023-10-paper-LLAMA-RIDER
excerpt: 'This paper proposes a self-driven framework for LLM-based agents in open worlds.'
date: 2023-10-01
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2310.08922'
citation: 'Y Feng, Y Wang, J Liu, S Zheng, Z Lu. (2023). "LLaMA Rider: Spurring Large Language Models to Explore the Open World." <i>arXiv preprint</i>. arXiv:2310.08922.'
---
Recently, various studies have leveraged Large Language Models (LLMs) to help decision-making and planning in environments, and try to align the LLMs' knowledge with the world conditions. Nonetheless, the capacity of LLMs to continuously acquire environmental knowledge and adapt in an open world remains uncertain. In this paper, we propose an approach to spur LLMs to explore the open world, gather experiences, and learn to improve their task-solving capabilities. In this approach, a multi-round feedback-revision mechanism is utilized to encourage LLMs to actively select appropriate revision actions guided by feedback information from the environment. This facilitates exploration and enhances the model's performance. Besides, we integrate sub-task relabeling to assist LLMs in maintaining consistency in sub-task planning and help the model learn the combinatorial nature between tasks, enabling it to complete a wider range of tasks through training based on the acquired exploration experiences. By evaluation in Minecraft, an open-ended sandbox world, we demonstrate that our approach LLaMA-Rider enhances the efficiency of the LLM in exploring the environment, and effectively improves the LLM's ability to accomplish more tasks through fine-tuning with merely 1.3k instances of collected data, showing minimal training costs compared to the baseline using reinforcement learning.