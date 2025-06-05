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

<div class="pagination-controls" style="text-align: center; margin: 20px 0;">
  <a href="#page1" class="page-link active">1</a>
  <a href="#page2" class="page-link">2</a>
  <a href="#page3" class="page-link">3</a>
</div>

<!-- Page 1 -->
<div id="page1" class="publication-page">
<table border="0" style="border:none; width: 100%;">

<tr style="border: none;">
  <td style="border: none;"> <img src="./images/21-arxiv25_egodtm.png" style="height: 100px; width: 500px;"/></td>
  <td style="border: none;"> 
        <p style="font-size: 15px"><b style="font-size: 18px">EgoDTM: Towards 3D-Aware Egocentric Video-Language Pretraining</b><br>
       Boshen Xu, Yuting Mei, Xinbi Liu, <b>Sipeng Zheng</b>, Qin Jin<br>
        arxiv 2025<br>
        [<a target="_blank" href="https://arxiv.org/abs/2503.15470">pdf</a>] 
        </p>
  </td>
</tr>

<tr style="border: none;">
  <td style="border: none;"> <img src="./images/20-arxiv25_mmdiag.jpg" style="height: 100px; width: 500px;"/></td>
  <td style="border: none;"> 
        <p style="font-size: 15px"><b style="font-size: 18px">Taking Notes Brings Focus? Towards Multi-Turn Multimodal Dialogue Learning</b><br>
        Jiazheng Liu, <b>Sipeng Zheng</b>, Börje F Karlsson, Zongqing Lu<br>
        arxiv 2025<br>
        [<a target="_blank" href="https://arxiv.org/abs/2503.07002">pdf</a>] 
        </p>
  </td>
</tr>

<!-- 继续添加前10篇论文... -->

</table>
</div>

<!-- Page 2 -->
<div id="page2" class="publication-page" style="display:none;">
<table border="0" style="border:none; width: 100%;">

<tr style="border: none;">
  <td style="border: none;"> <img src="./images/12-iclr23_steve_eye.png" style="height: 100px; width: 500px;"/></td>
  <td style="border: none;"> 
        <p style="font-size: 15px"><b style="font-size: 18px">Steve-Eye: Equipping LLM-based Embodied Agents with Visual Perception in Open Worlds</b><br>
        <b>Sipeng Zheng</b>, Jiazheng Liu, Yicheng Feng, Zongqing Lu<br>
        ICLR 2024<br>
        [<a target="_blank" href="https://arxiv.org/abs/2310.13255">pdf</a>] 
        [<a target="_blank" href="https://github.com/BAAI-Agents/Steve-Eye">code</a>] 
        [<a target="_blank" href="https://sites.google.com/view/steve-eye">page</a>]
        </p>
  </td>
</tr>

<!-- 继续添加第11-20篇论文... -->

</table>
</div>

<!-- Page 3 -->
<div id="page3" class="publication-page" style="display:none;">
<table border="0" style="border:none; width: 100%;">

<tr style="border: none;">
  <td style="border: none;"> <img src="./images/3-icme20_skeleton.jpg" style="height: 100px; width: 500px;"/></td>
  <td style="border: none;"> 
      <p style="font-size: 15px"><b style="font-size: 18px">Skeleton-based interactive graph network for human object interaction detection</b><br>
        <b>Sipeng Zheng</b>, Shizhe Chen, Qin Jin<br>
        ICME, 2020<br>
          [<a target="_blank" href="https://ieeexplore.ieee.org/document/9102755">pdf</a>] 
          [<a target="_blank" href="https://github.com/zhengsipeng/SIGN">code</a>]
      </p>
  </td>
</tr>

<!-- 继续添加剩余的论文... -->

</table>
</div>

<script>
// 简单的分页切换逻辑
document.querySelectorAll('.page-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 隐藏所有页面
    document.querySelectorAll('.publication-page').forEach(page => {
      page.style.display = 'none';
    });
    
    // 显示选中的页面
    const pageId = this.getAttribute('href').substring(1);
    document.getElementById(pageId).style.display = 'block';
    
    // 更新活动页面的样式
    document.querySelectorAll('.page-link').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
</script>

<style>
.page-link {
  display: inline-block;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  text-decoration: none;
  color: #333;
}
.page-link.active {
  background-color: #0066cc;
  color: white;
  border-color: #0066cc;
}
</style>

  
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
