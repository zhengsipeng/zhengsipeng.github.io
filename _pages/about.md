---
permalink: /
title: "Sipeng Zheng"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about.html
---

<b>Welcome to My Homepage!</b>
I'm a general partner of <b>BeingBeyond</b>, a startup dedicated to advancing large foundation models for humanoid robots, where I collaborate closely [Prof. Zongqing Lu](https://z0ngqing.github.io). 
Prior to this, I was a researcher at the [Beijing Academy of Artificial Intelligence(BAAI)](https://www.baai.ac.cn).
I obtained my PhD and bachelor's degree from [Renmin University of China (RUC)](https://en.ruc.edu.cn), under the guidance of [Prof. Qin Jin](https://www.jin-qin.com). 
My research primarily focuses on human behavior understanding, vision-and-language learning, and the development of open-world embodied agents.
Currently I'm working towards an general-purpose humanoid robot.
For more details, please refer to my [CV](http://zhengsipeng.github.io/cv_zsp_en.pdf).

<b>Join Us!</b>

We are actively recruiting full-time researchers and interns to join our team. If you’re passionate about embodied AI, feel free to [reach out](zhengsipeng27@gmail.com).


## Research Interest
* Large language models and large multimodal models
* Open-world embodied agent learning
* Human behavior and motion understanding
* Robot learning


## Work Experience
* May. 2025 - Current: Research Scientist
  * BeingBeyond, Beijing, China
  * Duties included: large multimodal model, robot learning, human motion understanding

* Jul. 2023 - May. 2025: Research Scientist
  * Beijing Academy of Artificial Intelligence, Beijing, China
  * Duties included: large multimodal model, multi-agent learning


* Apr. 2022 - Oct. 2022: Research Intern
  * Microsoft Research Asia, Beijing, China
  * Duties included: temporal sentence grounding for long-term videos.

* Nov. 2021 - Apr. 2022: Research Intern
  * Beijing Academy of Artificial Intelligence, Beijing, China
  * Duties included: multi-lingual language-vision-audio pre-training.


## Education
* B.Eng. in Computer Science and Engineering, Renmin University of China, China, 2023
* Ph.D. in Computer Science and Engineering, Renmin University of China, China, 2023


## Publications

<b>* denotes equal contribution</b>

<div id="publications-container">
  <!-- Publications will be loaded here by JavaScript -->
</div>

<div id="pagination-controls" style="text-align: center; margin-top: 20px;">
  <button id="prev-page" disabled>Previous</button>
  <span id="page-info">Page 1 of 3</span>
  <button id="next-page">Next</button>
</div>

<script>
  // All publications data
  const publications = [
    {
      image: "./images/21-arxiv25_egodtm.png",
      title: "EgoDTM: Towards 3D-Aware Egocentric Video-Language Pretraining",
      authors: "Boshen Xu, Yuting Mei, Xinbi Liu, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "arxiv 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2503.15470'>pdf</a>]"
    },
    {
      image: "./images/20-arxiv25_mmdiag.jpg",
      title: "Taking Notes Brings Focus? Towards Multi-Turn Multimodal Dialogue Learning",
      authors: "Jiazheng Liu, <b>Sipeng Zheng</b>, Börje F Karlsson, Zongqing Lu",
      venue: "arxiv 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2503.07002'>pdf</a>]"
    },
    {
      image: "./images/19-arxiv25_videoorin.jpg",
      title: "VideoOrion: Tokenizing Object Dynamics in Videos",
      authors: "Yicheng Feng$^*$, Yijiang Li$^*$, Wanpeng Zhang, <b>Sipeng Zheng</b>, Zongqing Lu",
      venue: "arxiv 2024",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2411.16156'>pdf</a>]"
    },
    {
      image: "./images/18-icml25_puppet.png",
      title: "Scaling Large Motion Models with Million-Level Human Motions",
      authors: "Ye Wang$^*$, <b>Sipeng Zheng</b>$^*$, Bin Cao, Qianshan Wei, Weishuai Zeng, Qin Jin, Zongqing Lu",
      venue: "ICML 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2410.03311'>pdf</a>] [<a target='_blank' href='https://beingbeyond.github.io/Being-M0/'>page</a>]"
    },
    {
      image: "./images/17-iclr25_2dbpe.png",
      title: "From Pixels to Tokens: Byte-Pair Encoding on Quantized Visual Modalities",
      authors: "Wanpeng Zhang, Zilong Xie, Yicheng Feng, Yijiang Li, Xingrun Xing, <b>Sipeng Zheng</b>, Zongqing Lu",
      venue: "ICLR 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2410.02155'>pdf</a>] [<a target='_blank' href='https://github.com/BeingBeyond/Being-VL-0'>page</a>]"
    },
    {
      image: "./images/16-arxiv24_quargpt.png",
      title: "QuadrupedGPT: Towards a Versatile Quadruped Agent in Open-ended Worlds",
      authors: "Yuting Mei$^*$, Ye Wang$^*$, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "arxiv 2024",
      links: "[<a target='_blank' href='https://arxiv.org/pdf/2406.16578'>pdf</a>] [<a target='_blank' href='https://quadruped-hub.github.io/Quadruped-GPT/'>page</a>]"
    },
    {
      image: "./images/15-iclr25_egonce++.png",
      title: "EgoNCE++: Do Egocentric Video-Language Models Really Understand Hand-Object Interactions?",
      authors: "Boshen Xu, Ziheng Wang, Yang Du, Zhinan Song, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "ICLR 2025",
      links: "[<a target='_blank' href='https://arxiv.org/html/2405.17719v1'>pdf</a>] [<a target='_blank' href='https://github.com/xuboshen/egoncepp'>code</a>]"
    },
    {
      image: "./images/14-3dv24_spaformer.png",
      title: "SPAFormer: Sequential 3D Part Assembly with Transformers",
      authors: "Boshen Xu, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "3DV 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2403.05874'>pdf</a>] [<a target='_blank' href='[https://github.com/xuboshen/SPAFormer](https://github.com/xuboshen/SPAFormer)'>code</a>]"
    },
    {
      image: "./images/13-eccv24_unicode.png",
      title: "UniCode: Learning a Unified Codebook for Multimodal Large Language Models",
      authors: "<b>Sipeng Zheng</b>, Bohan Zhou, Yicheng Feng, Ye Wang, Zongqing Lu",
      venue: "ECCV 2024",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2310.13255'>pdf</a>]"
    },
    {
      image: "./images/12-iclr23_steve_eye.png",
      title: "Steve-Eye: Equipping LLM-based Embodied Agents with Visual Perception in Open Worlds",
      authors: "<b>Sipeng Zheng</b>, Jiazheng Liu, Yicheng Feng, Zongqing Lu",
      venue: "ICLR 2024",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2310.13255'>pdf</a>] [<a target='_blank' href='https://github.com/BAAI-Agents/Steve-Eye'>code</a>] [<a target='_blank' href='https://sites.google.com/view/steve-eye'>page</a>]"
    },
    {
      image: "./images/11-naacl23_llama_rider.png",
      title: "LLaMA Rider: Spurring Large Language Models to Explore the Open World",
      authors: "Yicheng Feng, Yuxuan Wang, Jiazheng Liu, <b>Sipeng Zheng</b>, Zongqing Lu",
      venue: "NAACL 2024",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2310.08922'>pdf</a>] [<a target='_blank' href='https://github.com/PKU-RL/LLaMA-Rider'>code</a>]"
    },
    {
      image: "./images/10-mm23_pov.png",
      title: "POV: Prompt-Oriented View-agnostic Learning for Egocentric Hand-Object Interaction in the Multi-view World",
      authors: "Boshen Xu, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "ACM MM, 2023",
      links: "[<a target='_blank' href='https://dl.acm.org/doi/10.1145/3581783.3612484'>pdf</a>] [<a target='_blank' href='https://github.com/xuboshen/pov_acmmm2023'>code</a>] [<a target='_blank' href='https://xuboshen.github.io/POV/'>page</a>]"
    },
    {
      image: "./images/9-arxiv23_nofrill.png",
      title: "No-frills Temporal Video Grounding: Multi-Scale Neighboring Attention and Zoom-in Boundary Detection",
      authors: "Qi Zhang, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "arxiv 2023",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2307.10567'>pdf</a>] [<a target='_blank' href='https://github.com/QiQAng/AwareNet'>code</a>]"
    },
    {
      image: "./images/8-cvpr23_open.jpg",
      title: "Open-Category Human-Object Interaction Pre-Training via Language Modeling Framework",
      authors: "<b>Sipeng Zheng</b>, Boshen Xu, Qin Jin",
      venue: "CVPR, 2023",
      links: "[<a target='_blank' href='https://openaccess.thecvf.com/content/CVPR2023/papers/Zheng_Open-Category_Human-Object_Interaction_Pre-Training_via_Language_Modeling_Framework_CVPR_2023_paper.pdf'>pdf</a>]"
    },
    {
      image: "./images/7-aaai23_audio.jpg",
      title: "Accommodating audio modality in CLIP for multimodal processing",
      authors: "Ludan Ruan, Anwen Hu, Yuqing Song, Lliang Zhang, <b>Sipeng Zheng</b>, Qin Jin",
      venue: "AAAI, 2023",
      links: "[<a target='_blank' href='https://ojs.aaai.org/index.php/AAAI/article/view/26153/25925'>pdf</a>]"
    },
    {
      image: "./images/4-cvpr22_nlq.jpg",
      title: "Anchor-Based Detection for Natural Language Localization in Ego-Centric Videos",
      authors: "<b>Sipeng Zheng</b>, Bei Liu, Jianlong Fu, Wen-Huang Cheng",
      venue: "IEEC, 2023",
      links: "[<a target='_blank' href='https://ieeexplore.ieee.org/abstract/document/10043460'>pdf</a>] [<a target='_blank' href='https://github.com/QiQAng/AwareNet'>code</a>]"
    },
    {
      image: "./images/6-eccv22_fewshot.jpg",
      title: "Few-shot Action Recognition with Hierarchical Matching and Contrastive Learning",
      authors: "<b>Sipeng Zheng</b>, Shizhe Chen, Qin Jin",
      venue: "ECCV, 2022",
      links: "[<a target='_blank' href='https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136640293.pdf'>pdf</a>] [<a target='_blank' href='https://github.com/zhengsipeng/HCL-FSAR'>code</a>]"
    },
    {
      image: "./images/5-cvpr22_vrdformer.jpg",
      title: "VRDFormer: End-to-end video visual relation detection with transformer",
      authors: "<b>Sipeng Zheng</b>, Shizhe Chen, Qin Jin",
      venue: "CVPR Oral, 2022",
      links: "[<a target='_blank' href='https://openaccess.thecvf.com/content/CVPR2022/papers/Zheng_VRDFormer_End-to-End_Video_Visual_Relation_Detection_With_Transformers_CVPR_2022_paper.pdf'>pdf</a>] [<a target='_blank' href='https://github.com/zhengsipeng/VRDFormer_VRD'>code</a>]"
    },
    {
      image: "./images/4-cvpr22_nlq.jpg",
      title: "Exploring anchor-based detection for ego4d natural language query",
      authors: "<b>Sipeng Zheng</b>, Qi Zhang, Bei Liu, Qin Jin, Jianlong Fu",
      venue: "CVPR Workshop, 2022",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2208.05375'>pdf</a>] [<a target='_blank' href='https://github.com/QiQAng/AwareNet'>code</a>]"
    },
    {
      image: "./images/3-icme20_skeleton.jpg",
      title: "Skeleton-based interactive graph network for human object interaction detection",
      authors: "<b>Sipeng Zheng</b>, Shizhe Chen, Qin Jin",
      venue: "ICME, 2020",
      links: "[<a target='_blank' href='https://ieeexplore.ieee.org/document/9102755'>pdf</a>] [<a target='_blank' href='https://github.com/zhengsipeng/SIGN'>code</a>]"
    },
    {
      image: "./images/2-mm2019.jpg",
      title: "Visual relation detection with multi-level attention",
      authors: "<b>Sipeng Zheng</b>, Shizhe Chen, Qin Jin",
      venue: "ACM MM, 2019",
      links: "[<a target='_blank' href='https://dl.acm.org/doi/10.1145/3343031.3350962'>pdf</a>]"
    },
    {
      image: "./images/1-mm2019_gc.jpg",
      title: "Relation understanding in videos",
      authors: "<b>Sipeng Zheng</b>, Xiangyu Chen, Shizhe Chen, Qin Jin",
      venue: "ACM MM Grand Challenge, 2019",
      links: "[<a target='_blank' href='https://dl.acm.org/doi/10.1145/3343031.3356080'>pdf</a>]"
    }
  ];

  // Pagination variables
  const itemsPerPage = 10;
  let currentPage = 1;
  const totalPages = Math.ceil(publications.length / itemsPerPage);

  // DOM elements
  const container = document.getElementById('publications-container');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  // Function to render publications for current page
  function renderPublications() {
    container.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, publications.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      const pub = publications[i];
      const pubElement = document.createElement('div');
      pubElement.innerHTML = `
        <table border="0" style="border:none; width: 100%;">
          <tr style="border: none;">
            <td style="border: none;"> <img src="${pub.image}" style="height: 100px; width: 500px;"/></td>
            <td style="border: none;"> 
              <p style="font-size: 15px"><b style="font-size: 18px">${pub.title}</b><br>
              ${pub.authors}<br>
              ${pub.venue}<br>
              ${pub.links}
              </p>
            </td>
          </tr>
        </table>
      `;
      container.appendChild(pubElement);
    }
    
    // Update page info
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Event listeners for pagination buttons
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPublications();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPublications();
    }
  });

  // Initial render
  renderPublications();
</script>


  
## Awards
* 2025 Ranked 1st in GemBench Challenge at CVPR 2025 Workshop GRAIL.
* 2022 Ranked 3th in CVPR 2022 Ego4D Natural Language Query Challenge.
* 2021 Ranked 3th in NIST TRECVID 2021 Ad-hoc Video Search (AVS) Challenge.
* 2021 Ranked 2nd in CVPR 2021 HOMAGE Scene-graph Generation Challenge.
* 2020 Ranked 2nd in ACM MM 2020 Video Relationship Understanding Grand Challenge.
* 2019 Ranked 2nd in ACM MM 2019 Video Relationship Understanding Grand Challenge.
* 2022 National Scholarship for Ph.D Students.
* Best Method Prize in ACM MM 2019 Grand Challenge.
* 2019 First Class Scholarship for Ph.D Students from 2018 to 2021.
* 2015 First Prize in National University Mathematical Modeling Competition of Beijing Area.

## Services
* Conference Reviewer for CVPR, ICCV, ECCV, ACCV, NeurIPS, AAAI, ACM MM.
* Journal Reviewer for IJCV, TCSVT, TMM, JATS.
