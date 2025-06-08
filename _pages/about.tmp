---
permalink: /
title: "Sipeng Zheng"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about.html
---

<b>Welcome to My Homepage!</b>
I'm a general partner of <b>BeingBeyond</b>, a startup dedicated to advancing foundation models for embodied AI, where I collaborate closely [Prof. Zongqing Lu](https://z0ngqing.github.io). 
Prior to this, I was a researcher at the [Beijing Academy of Artificial Intelligence(BAAI)](https://www.baai.ac.cn).
I obtained my PhD and bachelor's degree from [Renmin University of China (RUC)](https://en.ruc.edu.cn), under the guidance of [Prof. Qin Jin](https://www.jin-qin.com). 
My research primarily focuses on human behavior understanding, vision-and-language learning, and the development of open-world embodied agents.
Currently I'm working towards an intelligent humanoid robot.
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

<div id="pagination-container">
  <!-- 论文列表由 JS 动态加载 -->
</div>

<div id="pagination-controls" style="text-align: center; margin-top: 20px;">
  <button id="prev-page" disabled>Previous</button>
  <span id="page-indicator">Page 1</span>
  <button id="next-page">Next</button>
</div>

<script>
  const publications = [
    {
      image: "./images/21-arxiv25_egodtm.png",
      title: "EgoDTM: Towards 3D-Aware Egocentric Video-Language Pretraining",
      authors: "Boshen Xu, Yuting Mei, Xinbi Liu, <b>Sipeng Zheng</b>, Qin Jin",
      conference: "arxiv 2025",
      links: "[<a target='_blank' href='https://arxiv.org/abs/2503.15470'>pdf</a>]"
    },
    // 其他论文数据（按你的列表顺序添加）
    // ...
  ];

  let currentPage = 1;
  const perPage = 10;
  const totalPages = Math.ceil(publications.length / perPage);

  function renderPublications(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedData = publications.slice(start, end);

    let html = '<table border="0" style="border:none; width: 100%;">';
    paginatedData.forEach((pub, index) => {
      html += `
        <tr style="border: none;">
          <td style="border: none;"> <img src="${pub.image}" style="height: 100px; width: 500px;"/></td>
          <td style="border: none;"> 
            <p style="font-size: 15px">
              <b style="font-size: 18px">${pub.title}</b><br>
              ${pub.authors}<br>
              ${pub.conference}<br>
              ${pub.links}
            </p>
          </td>
        </tr>
      `;
    });
    html += '</table>';

    document.getElementById('pagination-container').innerHTML = html;
    document.getElementById('page-indicator').textContent = `Page ${page} of ${totalPages}`;
    document.getElementById('prev-page').disabled = page === 1;
    document.getElementById('next-page').disabled = page === totalPages;
  }

  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPublications(currentPage);
    }
  });

  document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPublications(currentPage);
    }
  });

  // 初始加载
  renderPublications(1);
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
