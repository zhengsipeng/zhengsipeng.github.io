---
title: "UniCode: Learning a Unified Codebook for Multimodal Large Language Models"
collection: publications
permalink: /publication/2024-2-UNICODE
excerpt: 'This paper proposes UniCode, novel approach within the domain of multimodal large language models (MLLMs) that learns a unified codebook to efficiently tokenize visual, text, and potentially other types of signals.'
date: 2024-05-01
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2403.09072'
citation: 'S Zheng, B Zhou, Y Feng, Y Wang, Z Lu. "UniCode: Learning a Unified Codebook for Multimodal Large Language Models" <i>2024 arXiv preprint</i>. arXiv:2403.09072.'
---
In this paper, we propose \textbf{UniCode}, a novel approach within the domain of multimodal large language models (MLLMs) that learns a unified codebook to efficiently tokenize visual, text, and potentially other types of signals. 
This innovation addresses a critical limitation in existing MLLMs: their reliance on a text-only codebook, which restricts MLLM's ability to generate images and texts in a multimodal context. 
Towards this end, we propose a language-driven iterative training paradigm, coupled with an in-context pre-training task we term ``image decompression'', enabling our model to interpret compressed visual data and generate high-quality images.
The unified codebook empowers our model to extend visual instruction tuning to non-linguistic generation tasks. Moreover, UniCode is adaptable to diverse stacked quantization approaches in order to compress visual signals into a more compact token representation. 
Despite using significantly fewer parameters and less data during training, Unicode demonstrates promising capabilities in visual reconstruction and generation. It also achieves performances comparable to leading MLLMs across a spectrum of VQA benchmarks.

<figure>
<img src="../images/pubs/unicode_24.png" width="100%" height="100%" alt="替代文本">
<figcaption style="font-size: 18px">Figure 1: Illustration of multiple paradigms to obtain a unified codebook. Dotted line indicates the training loop: (a) frozen LLM codebook, which initiates the codebook with a pretrained LLM and freezes it during training; (b) dual alternative training, which jointly trains both visual tokenizer and LLM, by alternatively updating each one’s codebook using the other’s parameters. (c) language-driven iterative training, which smoothly updates the codebook of visual tokenizer with LLM’s through a moving average manner.</figcaption>
</figure>
